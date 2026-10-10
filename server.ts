import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import multer from 'multer';
import { BRANDING } from './src/data/branding';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Body parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Multer setup for inquiry attachments in memory (max 5 files, 5MB each, PDF/JPG/PNG only)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB max
    files: 5,
  },
  fileFilter: (_req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, JPG, and PNG files are accepted.'));
    }
  },
});

// In-memory rate limiting stores
const inquiryRateLimits = new Map<string, number[]>();
const chatRateLimits = new Map<string, number[]>();

function checkRateLimit(
  store: Map<string, number[]>,
  ip: string,
  limit: number,
  windowMs: number
): boolean {
  const now = Date.now();
  const history = (store.get(ip) || []).filter((timestamp) => now - timestamp < windowMs);
  if (history.length >= limit) {
    return false;
  }
  history.push(now);
  store.set(ip, history);
  return true;
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Nodemailer Transporter Helper
function getMailTransporter(): ReturnType<typeof nodemailer.createTransport> | null {
  const host = process.env.SMTP_HOST?.trim();
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const rawUser = process.env.SMTP_USER?.trim();
  const rawPass = process.env.SMTP_PASS?.trim();
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  if (!host || !rawUser || !rawPass) {
    return null;
  }

  // Extract pure email address if user string is formatted as "Display Name <email@domain.ae>"
  const match = rawUser.match(/<([^>]+)>/);
  const user = (match ? match[1].trim() : rawUser).replace(/^["']|["']$/g, '');
  const pass = rawPass.replace(/^["']|["']$/g, '');

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 15000,
  });
}

const FALLBACK_ERROR_MESSAGE = 'We could not send your inquiry right now. Please contact us on WhatsApp +971 56 805 5093 or call 06 805 5093.';

// ============================================================================
// 1. POST /api/inquiry - Real Email Transmission
// ============================================================================
app.post('/api/inquiry', (req, res, next) => {
  // Use multer middleware with error handling
  upload.array('documents', 5)(req, res, (err) => {
    if (err) {
      return res.status(400).json({
        error: err.message || 'File upload error (max 5 files, 5MB each, PDF/JPG/PNG only).',
      });
    }
    next();
  });
}, async (req, res) => {
  const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';

  // 1. In-memory Rate Limit: Max 5 inquiries per IP per 15 minutes
  if (!checkRateLimit(inquiryRateLimits, clientIp, 5, 15 * 60 * 1000)) {
    return res.status(429).json({
      error: 'Too many inquiries submitted from this connection. Please wait 15 minutes or contact us directly on WhatsApp (+971 56 805 5093).',
    });
  }

  try {
    const {
      fullName,
      phone,
      mobileNumber,
      email,
      service,
      notes,
      message,
      source = 'website',
      // Honeypot field (hidden from real users)
      hp,
      honeypot,
      website,
    } = req.body;

    // 2. Honeypot Check: bots that fill invisible fields are silently dropped
    if (hp || honeypot || website) {
      console.warn(`[Inquiry Honeypot Triggered] IP: ${clientIp}`);
      return res.status(200).json({
        success: true,
        message: 'Inquiry received successfully.',
      });
    }

    const cleanFullName = (fullName || '').trim();
    const cleanPhone = (phone || mobileNumber || '').trim();
    const cleanEmail = (email || '').trim();
    const cleanService = (service || 'General Service Inquiry').trim();
    const cleanNotes = (notes || message || '').trim();
    const cleanSource = (source || 'general').trim();

    // Source-specific validation:
    // If it's a newsletter subscription, email is strictly required
    const isNewsletter = cleanSource.toLowerCase().includes('newsletter');

    if (isNewsletter) {
      if (!cleanEmail || !cleanEmail.includes('@')) {
        return res.status(400).json({ error: 'A valid email address is required for bulletin subscription.' });
      }
    } else {
      // General inquiry requires Full Name and Contact Phone
      if (!cleanFullName || cleanFullName.length < 2) {
        return res.status(400).json({ error: 'Please enter your full name (minimum 2 characters).' });
      }
      if (cleanFullName.length > 150) {
        return res.status(400).json({ error: 'Name must not exceed 150 characters.' });
      }
      if (!cleanPhone || cleanPhone.length < 6) {
        return res.status(400).json({ error: 'Please enter a valid phone or WhatsApp number.' });
      }
      if (cleanPhone.length > 50) {
        return res.status(400).json({ error: 'Phone number must not exceed 50 characters.' });
      }
    }

    // Optional email validation
    if (cleanEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(cleanEmail) || cleanEmail.length > 150) {
        return res.status(400).json({ error: 'Please provide a valid email address.' });
      }
    }

    if (cleanNotes.length > 3000) {
      return res.status(400).json({ error: 'Notes or message cannot exceed 3000 characters.' });
    }

    // Check required SMTP environment variables
    const missingSmtpVars: string[] = [];
    if (!process.env.SMTP_HOST?.trim()) missingSmtpVars.push('SMTP_HOST');
    if (!process.env.SMTP_USER?.trim()) missingSmtpVars.push('SMTP_USER');
    if (!process.env.SMTP_PASS?.trim()) missingSmtpVars.push('SMTP_PASS');

    if (missingSmtpVars.length > 0) {
      console.error(`[SMTP Config Error] Missing required SMTP environment variable(s): ${missingSmtpVars.join(', ')}`);
      return res.status(503).json({
        success: false,
        error: FALLBACK_ERROR_MESSAGE,
      });
    }

    const transporter = getMailTransporter();
    if (!transporter) {
      console.error('[SMTP Config Error] Failed to initialize mail transporter.');
      return res.status(503).json({
        success: false,
        error: FALLBACK_ERROR_MESSAGE,
      });
    }

    // Process attached files from multer
    const rawFiles = (req.files as Express.Multer.File[]) || [];
    const attachments = rawFiles.map((file) => ({
      filename: file.originalname,
      content: file.buffer,
      contentType: file.mimetype,
    }));

    // Generate unique dossier tracking ID
    const inquiryId = `INQ-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // Keep only a console log line with inquiry ID and service name (no phone or email in logs)
    console.log(`[Inquiry Received] ID: ${inquiryId} - Service: ${cleanService}`);

    // Branded Notification Email HTML
    const formattedDate = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Dubai',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const staffEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050B14; color: #E2E8F0; margin: 0; padding: 24px; }
    .container { max-width: 620px; margin: 0 auto; background-color: #0B1528; border: 1px solid rgba(212, 175, 55, 0.4); border-radius: 18px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    .header { background: linear-gradient(135deg, #050B14 0%, #16243E 100%); padding: 28px; border-bottom: 2px solid #D4AF37; }
    .logo-text { font-size: 20px; font-weight: 900; letter-spacing: 1px; color: #FFFFFF; }
    .logo-gold { color: #D4AF37; }
    .tagline { font-size: 10px; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 2px; margin-top: 4px; }
    .badge { display: inline-block; padding: 4px 10px; font-size: 11px; font-weight: 700; font-family: monospace; border-radius: 9999px; background: rgba(212, 175, 55, 0.15); color: #D4AF37; border: 1px solid rgba(212, 175, 55, 0.3); margin-top: 12px; }
    .content { padding: 28px; }
    .section-title { font-size: 12px; font-weight: 800; color: #D4AF37; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
    .field-row { margin-bottom: 14px; }
    .field-label { font-size: 11px; text-transform: uppercase; font-weight: 600; color: #94A3B8; margin-bottom: 3px; }
    .field-value { font-size: 14px; font-weight: 600; color: #FFFFFF; }
    .field-notes { font-size: 13px; line-height: 1.6; color: #CBD5E1; background: #050B14; border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 14px; white-space: pre-wrap; margin-top: 6px; }
    .footer { background: #050B14; padding: 20px 28px; font-size: 11px; color: #64748B; border-top: 1px solid rgba(255,255,255,0.08); }
    .action-btn { display: inline-block; background: #D4AF37; color: #050B14; font-weight: 800; font-size: 12px; padding: 10px 18px; border-radius: 8px; text-decoration: none; margin-top: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-text">CORE<span class="logo-gold">LINK</span> ADMINISTRATIVE SERVICES</div>
      <div class="tagline">Official Administrative & Government Liaison Inquiry</div>
      <div class="badge">DOSSIER ID: ${inquiryId} · ${escapeHtml(cleanSource).toUpperCase()}</div>
    </div>
    <div class="content">
      <div class="section-title">Client Details & Requirements</div>
      
      <div class="field-row">
        <div class="field-label">Full Name / Organization</div>
        <div class="field-value">${escapeHtml(cleanFullName || 'Newsletter Subscriber')}</div>
      </div>

      <div class="field-row">
        <div class="field-label">Contact Phone / WhatsApp</div>
        <div class="field-value">${escapeHtml(cleanPhone || 'Not Provided')}</div>
      </div>

      <div class="field-row">
        <div class="field-label">Email Address</div>
        <div class="field-value">${escapeHtml(cleanEmail || 'Not Provided')}</div>
      </div>

      <div class="field-row">
        <div class="field-label">Requested Service</div>
        <div class="field-value" style="color: #D4AF37;">${escapeHtml(cleanService)}</div>
      </div>

      ${cleanNotes ? `
      <div class="field-row">
        <div class="field-label">Notes & Specifications</div>
        <div class="field-notes">${escapeHtml(cleanNotes)}</div>
      </div>
      ` : ''}

      ${attachments.length > 0 ? `
      <div class="field-row">
        <div class="field-label">Attached Documents (${attachments.length} files)</div>
        <div class="field-value" style="color: #38BDF8;">
          ${attachments.map(a => escapeHtml(a.filename)).join(', ')}
        </div>
      </div>
      ` : ''}

      ${cleanPhone ? `
      <a class="action-btn" href="https://wa.me/${cleanPhone.replace(/[^0-9]/g, '')}">Reply via WhatsApp</a>
      ` : ''}
    </div>
    <div class="footer">
      Transmission Timestamp: ${formattedDate} (UAE Time)<br/>
      Client IP: ${escapeHtml(clientIp)} · CORE LINK Executive Server
    </div>
  </div>
</body>
</html>
    `;

    const rawUser = process.env.SMTP_USER?.trim() || '';
    const match = rawUser.match(/<([^>]+)>/);
    const cleanUser = match ? match[1].trim() : rawUser;
    const targetRecipient = process.env.MAIL_TO?.trim() || BRANDING.emails.sales || 'sales@corelinkservices.ae';
    const fromAddress = process.env.MAIL_FROM?.trim() || (cleanUser ? `CORE LINK Services <${cleanUser}>` : `CORE LINK Services <sales@corelinkservices.ae>`);

    // 1. Dispatch staff alert email (MANDATORY)
    try {
      await transporter.sendMail({
        from: fromAddress,
        to: targetRecipient,
        replyTo: cleanEmail || undefined,
        subject: `[CORE LINK Inquiry #${inquiryId}] ${cleanService} - ${cleanFullName || cleanEmail}`,
        html: staffEmailHtml,
        attachments,
      });
    } catch (staffMailErr: any) {
      console.error('[Inquiry Staff Email Error]', {
        message: staffMailErr?.message,
        code: staffMailErr?.code,
        response: staffMailErr?.response,
      });
      return res.status(502).json({
        success: false,
        error: FALLBACK_ERROR_MESSAGE,
      });
    }

    // 2. Dispatch auto-confirmation email to client if email was provided (OPTIONAL)
    if (cleanEmail) {
      const clientEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050B14; color: #E2E8F0; margin: 0; padding: 24px; }
    .container { max-width: 580px; margin: 0 auto; background-color: #0B1528; border: 1px solid rgba(212, 175, 55, 0.4); border-radius: 16px; overflow: hidden; }
    .header { background: #050B14; padding: 28px; border-bottom: 2px solid #D4AF37; text-align: center; }
    .logo-text { font-size: 22px; font-weight: 900; color: #FFFFFF; }
    .logo-gold { color: #D4AF37; }
    .content { padding: 30px; font-size: 14px; line-height: 1.6; color: #CBD5E1; }
    .highlight { color: #D4AF37; font-weight: 700; }
    .contact-card { background: #050B14; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 18px; margin: 20px 0; }
    .footer { background: #050B14; padding: 18px 30px; font-size: 11px; color: #64748B; text-align: center; border-top: 1px solid rgba(255,255,255,0.08); }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-text">CORE<span class="logo-gold">LINK</span></div>
      <div style="font-size: 10px; color: #94A3B8; text-transform: uppercase; letter-spacing: 2px; margin-top: 4px;">Administrative Services · UAE</div>
    </div>
    <div class="content">
      <h2 style="color: #FFFFFF; font-size: 18px; margin-top: 0;">We received your inquiry</h2>
      <p>Dear <strong style="color: #FFFFFF;">${escapeHtml(cleanFullName || 'Valued Client')}</strong>,</p>
      <p>Thank you for contacting <strong>CORE LINK Administrative Services</strong>. We have successfully logged your inquiry regarding <span class="highlight">${escapeHtml(cleanService)}</span> (Reference ID: <strong style="color: #D4AF37;">${inquiryId}</strong>).</p>
      <p>An executive PRO consultant will review your dossier and connect with you shortly.</p>
      
      <div class="contact-card">
        <div style="font-size: 12px; font-weight: 700; color: #D4AF37; text-transform: uppercase; margin-bottom: 8px;">Direct Communications & Walk-in HQ</div>
        <div><strong>Ajman Headquarters:</strong> ${BRANDING.locations[0].address}, ${BRANDING.locations[0].city}</div>
        <div><strong>Office Landline:</strong> <a href="tel:+97168055093" style="color: #D4AF37; text-decoration: none;">06 805 5093</a></div>
        <div><strong>WhatsApp Priority:</strong> <a href="https://wa.me/971568055093" style="color: #34D399; text-decoration: none;">+971 56 805 5093</a></div>
        <div><strong>Email:</strong> ${BRANDING.emails.info}</div>
      </div>

      <p style="font-size: 12px; color: #94A3B8;">If you need urgent same-day processing or express typing clearance, feel free to reply directly to this email or reach us on WhatsApp.</p>
    </div>
    <div class="footer">
      CORE LINK Administrative Services · Licensed UAE Government Liaison & Corporate Typing<br/>
      Ajman DED License No. 140290
    </div>
  </div>
</body>
</html>
      `;

      try {
        await transporter.sendMail({
          from: fromAddress,
          to: cleanEmail,
          subject: `We received your inquiry [${inquiryId}] - CORE LINK Administrative Services`,
          html: clientEmailHtml,
        });
      } catch (autoReplyErr: any) {
        console.warn('[Auto-Reply Notice] Client confirmation email could not be delivered:', {
          message: autoReplyErr?.message,
          code: autoReplyErr?.code,
          response: autoReplyErr?.response,
        });
        // Client auto-reply failure does NOT fail the request because staff email was already sent
      }
    }

    return res.status(200).json({
      success: true,
      inquiryId,
      message: 'Inquiry transmitted successfully. Our executive consultant has received your dossier.',
    });
  } catch (error: any) {
    console.error('[Inquiry Request Exception]', {
      message: error?.message,
      code: error?.code,
      response: error?.response,
    });
    return res.status(500).json({
      success: false,
      error: FALLBACK_ERROR_MESSAGE,
    });
  }
});

// ============================================================================
// Mail Health Check Endpoint
// ============================================================================
app.get('/api/health/mail', async (_req, res) => {
  const missing: string[] = [];
  if (!process.env.SMTP_HOST?.trim()) missing.push('SMTP_HOST');
  if (!process.env.SMTP_USER?.trim()) missing.push('SMTP_USER');
  if (!process.env.SMTP_PASS?.trim()) missing.push('SMTP_PASS');

  if (missing.length > 0) {
    return res.json({
      configured: false,
      missing,
    });
  }

  const transporter = getMailTransporter();
  if (!transporter) {
    return res.json({
      configured: false,
      missing: ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'],
    });
  }

  try {
    await transporter.verify();
    return res.json({
      configured: true,
      verified: true,
    });
  } catch (err: any) {
    console.error('[Mail Health Check Error]', {
      message: err?.message,
      code: err?.code,
      response: err?.response,
    });
    return res.json({
      configured: true,
      verified: false,
      error: err?.message || 'SMTP verification failed',
    });
  }
});

// ============================================================================
// 2. POST /api/chat - Stable Gemini AI Chatbot
// ============================================================================
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error('GEMINI_API_KEY environment variable is required');
    }
    aiClient = new GoogleGenAI({ apiKey: key });
  }
  return aiClient;
}

app.post('/api/chat', async (req, res) => {
  const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';

  // 1. Rate Limiting: 20 requests per IP per 10 minutes
  if (!checkRateLimit(chatRateLimits, clientIp, 20, 10 * 60 * 1000)) {
    return res.status(429).json({
      error: 'Rate limit reached. Please wait a few minutes before asking more questions.',
      fallbackReply: `You have reached the chat rate limit. For immediate assistance, call our Ajman office directly at ${BRANDING.landlineFormatted} or reach WhatsApp at ${BRANDING.mobileFormatted}.`,
    });
  }

  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Message cannot be empty.' });
    }

    // 2. Limit message length to 1000 characters
    const cleanMsg = message.trim();
    if (cleanMsg.length > 1000) {
      return res.status(400).json({ error: 'Message is too long. Maximum allowed is 1000 characters.' });
    }

    const ai = getAiClient();

    // 3. Move system prompt into config.systemInstruction
    const systemInstruction = `You are the VIP Executive AI Concierge for ${BRANDING.fullName} in the UAE.

Official Company Contact Details (Single Source of Truth):
- Company: ${BRANDING.fullName}
- Brand Name: ${BRANDING.name}
- Tagline: ${BRANDING.tagline}
- Main Office: ${BRANDING.locations[0].name}, ${BRANDING.locations[0].address}, ${BRANDING.locations[0].city} (DED Lic. 140290)
- Office Landline: ${BRANDING.landlineFormatted} (${BRANDING.telephone})
- Mobile / WhatsApp: ${BRANDING.mobileFormatted} (${BRANDING.whatsappNumber})
- Official Inboxes: ${BRANDING.emails.info} | ${BRANDING.emails.sales} | ${BRANDING.emails.support}
- Working Hours: Sat – Thu · 9:00 AM – 7:00 PM (24/7 VIP Emergency Liaison Desk)

Specializations:
UAE Golden Visas (Investors, Entrepreneurs, Property, Talents), Family & Employment Visas, Corporate PRO, Mainland (DET) & Freezone LLC Business Setup, MOHRE / Tasheel labor contracts, ICP Smart Services, GDRFA / Amer, VIP Salem Medical Fitness & Emirates ID typing, MOFA legal attestation, and Worldwide Ticketing.

Key Guidelines:
1. Speak with executive courtesy, helpfulness, and professional authority.
2. If the user writes in Arabic, Urdu, Russian, Hindi, Chinese, or English, reply naturally and fluently in their language.
3. Keep answers concise, highly structured, and easy to read using clear bullet points.
4. Emphasize that CORE LINK provides dedicated PRO support, reliable document clearance, and personalized assistance.
5. Guide visitors to contact the Ajman main office (${BRANDING.landlineFormatted}), chat on WhatsApp (${BRANDING.mobileFormatted}), or submit their inquiry directly on the site.`;

    // 4. Limit history to last 10 messages
    const safeHistory = Array.isArray(history) ? history.slice(-10) : [];
    const formattedHistory = safeHistory
      .filter((msg: any) => msg && typeof msg.text === 'string' && (msg.role === 'user' || msg.role === 'assistant' || msg.role === 'model'))
      .map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: String(msg.text).slice(0, 1000) }],
      }));

    formattedHistory.push({
      role: 'user',
      parts: [{ text: cleanMsg }],
    });

    // 5. Use stable model with low/no thinking for fast replies
    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: formattedHistory,
      config: {
        systemInstruction,
        thinkingConfig: {
          thinkingBudget: 0,
        },
      },
    });

    const replyText = response.text || `Thank you for contacting ${BRANDING.fullName}. How may our PRO liaison assist you today? You can reach us at ${BRANDING.landlineFormatted} or on WhatsApp at ${BRANDING.mobileFormatted}.`;

    res.json({ reply: replyText });
  } catch (error: any) {
    console.error('Gemini API Chat Error:', error);
    res.status(500).json({
      error: error.message || 'Failed to connect to CORE LINK AI Assistant',
      fallbackReply: `Our AI concierge is currently experiencing high inquiry volume. Please call our Ajman office at ${BRANDING.landlineFormatted} or chat on WhatsApp (+971 56 805 5093) for immediate assistance.`,
    });
  }
});

// ============================================================================
// 3. Vite middleware / Static file setup
// ============================================================================
app.use(express.static(path.join(process.cwd(), 'public')));

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`CORE LINK Executive Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
