const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Replace Navbar phone & whatsapp
html = html.replace(
  '<a href="tel:[PHONE NUMBER]" class="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-xs font-semibold text-slate-200 hover:text-white transition-all">\n            <i data-lucide="phone" class="w-3.5 h-3.5 text-[#D4AF37]"></i>\n            <span>[PHONE NUMBER]</span>\n          </a>',
  '<a href="tel:+97168055093" class="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-xs font-semibold text-slate-200 hover:text-white transition-all">\n            <i data-lucide="phone" class="w-3.5 h-3.5 text-[#D4AF37]"></i>\n            <span>+971 6 805 5093</span>\n          </a>'
);

html = html.replace(
  '<a href="https://wa.me/?text=Hello%20CORE%20LINK%20Administrative%20Services" target="_blank" rel="noopener noreferrer" class="magnetic-btn px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 text-emerald-400 font-bold text-xs flex items-center gap-1.5 transition-all">',
  '<a href="https://wa.me/971563506552?text=Hello%20CORE%20LINK%2C%20I%20need%20help%20with%20your%20services" target="_blank" rel="noopener noreferrer" class="magnetic-btn px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 text-emerald-400 font-bold text-xs flex items-center gap-1.5 transition-all">'
);

// 2. Mobile Menu replacements
html = html.replace(
  '<a href="tel:[PHONE NUMBER]" class="text-xs text-slate-300 flex items-center gap-2">\n            <i data-lucide="phone" class="w-4 h-4 text-[#D4AF37]"></i> Call: [PHONE NUMBER]\n          </a>',
  '<a href="tel:+97168055093" class="text-xs text-slate-300 flex items-center gap-2">\n            <i data-lucide="phone" class="w-4 h-4 text-[#D4AF37]"></i> Call: +971 6 805 5093\n          </a>'
);

html = html.replace(
  '<a href="https://wa.me/?text=Hello%20CORE%20LINK%20Administrative%20Services" class="text-xs text-emerald-400 flex items-center gap-2">\n            <i data-lucide="message-circle" class="w-4 h-4"></i> WhatsApp: [WHATSAPP NUMBER]\n          </a>',
  '<a href="https://wa.me/971563506552?text=Hello%20CORE%20LINK%2C%20I%20need%20help%20with%20your%20services" target="_blank" rel="noopener noreferrer" class="text-xs text-emerald-400 flex items-center gap-2">\n            <i data-lucide="message-circle" class="w-4 h-4"></i> WhatsApp: +971 56 350 6552\n          </a>'
);

// 3. Hero CTA WhatsApp
html = html.replace(
  '<a href="https://wa.me/?text=Hello%20CORE%20LINK%20Administrative%20Services%20in%20Ajman" target="_blank" rel="noopener noreferrer" class="magnetic-btn px-6 py-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/30 font-bold text-sm flex items-center gap-2 transition-all">\n                <i data-lucide="message-circle" class="w-4 h-4"></i>\n                <span>Chat on WhatsApp ([WHATSAPP NUMBER])</span>\n              </a>',
  '<a href="https://wa.me/971563506552?text=Hello%20CORE%20LINK%2C%20I%20need%20help%20with%20your%20services" target="_blank" rel="noopener noreferrer" class="magnetic-btn px-6 py-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/30 font-bold text-sm flex items-center gap-2 transition-all">\n                <i data-lucide="message-circle" class="w-4 h-4"></i>\n                <span>Chat on WhatsApp (+971 56 350 6552)</span>\n              </a>'
);

// 4. Contact Section Direct Buttons & Emails
const oldContactBtns = `<div class="pt-6 border-t border-white/10 space-y-3">
                
                <!-- Call Button -->
                <a href="tel:[PHONE NUMBER]" class="w-full magnetic-btn py-3.5 px-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37] text-white font-bold text-sm flex items-center justify-center gap-3 transition-all">
                  <i data-lucide="phone" class="w-4 h-4 text-[#D4AF37]"></i>
                  <span>Call Us: [PHONE NUMBER]</span>
                </a>

                <!-- WhatsApp Button -->
                <a href="https://wa.me/?text=Hello%20CORE%20LINK%20Administrative%20Services" target="_blank" rel="noopener noreferrer" class="w-full magnetic-btn py-3.5 px-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 text-emerald-400 font-bold text-sm flex items-center justify-center gap-3 transition-all">
                  <i data-lucide="message-circle" class="w-4 h-4"></i>
                  <span>Chat on WhatsApp: [WHATSAPP NUMBER]</span>
                </a>

                <!-- Email Link -->
                <a href="mailto:[EMAIL]" class="w-full magnetic-btn py-3.5 px-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37] text-slate-300 hover:text-white font-semibold text-sm flex items-center justify-center gap-3 transition-all">
                  <i data-lucide="mail" class="w-4 h-4 text-[#D4AF37]"></i>
                  <span>Email: [EMAIL]</span>
                </a>

              </div>`;

const newContactBtns = `<div class="pt-6 border-t border-white/10 space-y-3">
                
                <!-- Call Button -->
                <a href="tel:+97168055093" class="w-full magnetic-btn py-3.5 px-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37] text-white font-bold text-sm flex items-center justify-center gap-3 transition-all">
                  <i data-lucide="phone" class="w-4 h-4 text-[#D4AF37]"></i>
                  <span>Call Us: +971 6 805 5093</span>
                </a>

                <!-- WhatsApp Button -->
                <a href="https://wa.me/971563506552?text=Hello%20CORE%20LINK%2C%20I%20need%20help%20with%20your%20services" target="_blank" rel="noopener noreferrer" class="w-full magnetic-btn py-3.5 px-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 text-emerald-400 font-bold text-sm flex items-center justify-center gap-3 transition-all">
                  <i data-lucide="message-circle" class="w-4 h-4"></i>
                  <span>Chat on WhatsApp: +971 56 350 6552</span>
                </a>

                <!-- Emails (Sales, Support, Info) -->
                <div class="pt-3 border-t border-white/10 space-y-2">
                  <div class="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37]">Direct Department Inquiries</div>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <a href="mailto:sales@corelinkservices.ae" class="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] text-center text-xs text-slate-200 hover:text-white transition-all block">
                      <div class="font-bold text-[#D4AF37] text-[10px] uppercase">Sales</div>
                      <div class="truncate text-[11px]">sales@corelinkservices.ae</div>
                    </a>
                    <a href="mailto:support@corelinkservices.ae" class="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] text-center text-xs text-slate-200 hover:text-white transition-all block">
                      <div class="font-bold text-[#D4AF37] text-[10px] uppercase">Support</div>
                      <div class="truncate text-[11px]">support@corelinkservices.ae</div>
                    </a>
                    <a href="mailto:info@corelinkservices.ae" class="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] text-center text-xs text-slate-200 hover:text-white transition-all block">
                      <div class="font-bold text-[#D4AF37] text-[10px] uppercase">General Info</div>
                      <div class="truncate text-[11px]">info@corelinkservices.ae</div>
                    </a>
                  </div>
                </div>

              </div>`;

html = html.replace(oldContactBtns, newContactBtns);

// 5. Contact Form HTML with FormSubmit hidden fields and dropdown
const oldContactForm = `<form id="contact-form" onsubmit="handleFormSubmit(event)" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Full Name</label>
                    <input type="text" id="form-name" required placeholder="e.g. Mohammed Al Mansoori" class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:border-[#D4AF37] focus:outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Phone / WhatsApp</label>
                    <input type="tel" id="form-phone" required placeholder="e.g. +971 50 123 4567" class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:border-[#D4AF37] focus:outline-none transition-colors text-sm" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Email Address</label>
                    <input type="email" id="form-email" required placeholder="name@domain.com" class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:border-[#D4AF37] focus:outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Service Required</label>
                    <select id="form-service" class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white focus:border-[#D4AF37] focus:outline-none transition-colors text-sm">
                      <option value="Transactions Follow-up Services">Transactions Follow-up Services</option>
                      <option value="Visa Services">Visa Services (UAE Residence / Visit)</option>
                      <option value="Europe Visa Assistance">Europe Visa Assistance</option>
                      <option value="Typing and Documents Photocopying Services">Typing and Documents Photocopying</option>
                      <option value="Administrative Services for Businessmen">Administrative Services for Businessmen</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Inquiry / Notes</label>
                  <textarea id="form-notes" rows="4" placeholder="Briefly describe the paperwork or services you need assistance with..." class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:border-[#D4AF37] focus:outline-none transition-colors text-sm"></textarea>
                </div>

                <div id="form-status" class="hidden text-xs p-3 rounded-xl font-medium"></div>

                <button type="submit" id="form-submit-btn" class="magnetic-btn w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-slate-950 font-bold text-sm shadow-xl shadow-[#D4AF37]/20 hover:scale-[1.01] transition-all">
                  Submit Inquiry to CORE LINK Desk
                </button>
              </form>`;

const newContactForm = `<form id="contact-form" onsubmit="handleFormSubmit(event)" class="space-y-4">
                <!-- FormSubmit Hidden Configuration Fields -->
                <input type="hidden" name="_subject" value="New Inquiry from CORE LINK Website" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <!-- Honeypot for spam protection -->
                <input type="text" name="_honey" id="form-honey" style="display:none" tabindex="-1" autocomplete="off" />

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="form-name" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Full Name <span class="text-[#D4AF37]">*</span></label>
                    <input type="text" id="form-name" name="name" required placeholder="e.g. Mohammed Al Mansoori" class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:border-[#D4AF37] focus:outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label for="form-phone" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Phone / WhatsApp <span class="text-[#D4AF37]">*</span></label>
                    <input type="tel" id="form-phone" name="phone" required placeholder="e.g. +971 50 123 4567" class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:border-[#D4AF37] focus:outline-none transition-colors text-sm" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="form-email" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Email Address <span class="text-[#D4AF37]">*</span></label>
                    <input type="email" id="form-email" name="email" required placeholder="name@domain.com" class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:border-[#D4AF37] focus:outline-none transition-colors text-sm" />
                  </div>
                  <div>
                    <label for="form-service" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Service Required</label>
                    <select id="form-service" name="service" class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white focus:border-[#D4AF37] focus:outline-none transition-colors text-sm">
                      <option value="Transactions Follow-up">Transactions Follow-up</option>
                      <option value="Visa Services">Visa Services</option>
                      <option value="Europe Visa Assistance">Europe Visa Assistance</option>
                      <option value="Typing and Photocopying">Typing and Photocopying</option>
                      <option value="Administrative Services">Administrative Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label for="form-message" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Message <span class="text-[#D4AF37]">*</span></label>
                  <textarea id="form-message" name="message" required rows="4" placeholder="Describe the document follow-up, visa assistance, or paperwork you need..." class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:border-[#D4AF37] focus:outline-none transition-colors text-sm"></textarea>
                </div>

                <div id="form-status" class="hidden text-xs p-4 rounded-xl font-medium transition-all"></div>

                <button type="submit" id="form-submit-btn" class="magnetic-btn w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-slate-950 font-bold text-sm shadow-xl shadow-[#D4AF37]/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2">
                  <span>Submit Inquiry to info@corelinkservices.ae</span>
                </button>
              </form>`;

html = html.replace(oldContactForm, newContactForm);

// 6. Footer Emails & Phone & WhatsApp
const oldFooterOffice = `<div class="space-y-2 text-xs">
              <p class="text-slate-300 font-medium">Shop No. 9, Liwara 1, Ajman, UAE</p>
              <p>Phone: <a href="tel:[PHONE NUMBER]" class="text-slate-300 hover:text-[#D4AF37]">[PHONE NUMBER]</a></p>
              <p>WhatsApp: <a href="https://wa.me/?text=Hello%20CORE%20LINK" class="text-emerald-400">[WHATSAPP NUMBER]</a></p>
              <p>Email: <a href="mailto:[EMAIL]" class="text-slate-300 hover:text-[#D4AF37]">[EMAIL]</a></p>
            </div>`;

const newFooterOffice = `<div class="space-y-2.5 text-xs">
              <p class="text-slate-300 font-medium">Shop No. 9, Liwara 1, Ajman, UAE</p>
              <p>Phone: <a href="tel:+97168055093" class="text-slate-300 hover:text-[#D4AF37] font-mono">+971 6 805 5093</a></p>
              <p>WhatsApp: <a href="https://wa.me/971563506552?text=Hello%20CORE%20LINK%2C%20I%20need%20help%20with%20your%20services" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline font-mono">+971 56 350 6552</a></p>
              <div class="pt-1.5 space-y-1 text-[11px]">
                <p class="text-slate-400">Sales: <a href="mailto:sales@corelinkservices.ae" class="text-slate-300 hover:text-[#D4AF37]">sales@corelinkservices.ae</a></p>
                <p class="text-slate-400">Support: <a href="mailto:support@corelinkservices.ae" class="text-slate-300 hover:text-[#D4AF37]">support@corelinkservices.ae</a></p>
                <p class="text-slate-400">Info: <a href="mailto:info@corelinkservices.ae" class="text-[#D4AF37] hover:underline">info@corelinkservices.ae</a></p>
              </div>
            </div>`;

html = html.replace(oldFooterOffice, newFooterOffice);

// 7. Add Floating WhatsApp and Call buttons right before </body>
const floatingButtons = `
    <!-- Floating WhatsApp & Call Quick Action Buttons -->
    <div id="floating-actions" class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      <!-- Floating Call Button -->
      <a href="tel:+97168055093" 
         aria-label="Call CORE LINK Office +971 6 805 5093" 
         class="magnetic-btn group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0B1528]/95 border border-[#D4AF37]/50 text-[#D4AF37] hover:text-slate-950 hover:bg-[#D4AF37] shadow-xl shadow-black/60 hover:scale-110 transition-all duration-300 backdrop-blur-md">
        <i data-lucide="phone" class="w-5 h-5"></i>
        <span class="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#0B1528] border border-white/10 text-xs font-semibold text-white whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
          Call +971 6 805 5093
        </span>
      </a>

      <!-- Floating WhatsApp Button -->
      <a href="https://wa.me/971563506552?text=Hello%20CORE%20LINK%2C%20I%20need%20help%20with%20your%20services" 
         target="_blank" 
         rel="noopener noreferrer" 
         aria-label="Chat with CORE LINK on WhatsApp +971 56 350 6552" 
         class="magnetic-btn group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-slate-950 hover:bg-[#20ba5a] shadow-xl shadow-[#25D366]/40 hover:scale-110 transition-all duration-300">
        <span class="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        <i data-lucide="message-circle" class="w-7 h-7 relative z-10 text-white fill-white"></i>
        <span class="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#0B1528] border border-white/10 text-xs font-semibold text-white whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
          WhatsApp +971 56 350 6552
        </span>
      </a>
    </div>
`;

if (!html.includes('id="floating-actions"')) {
  html = html.replace('</body>', floatingButtons + '\n  </body>');
}

// 8. Replace handleFormSubmit and handleModalSubmit with FormSubmit AJAX handler & animations
const oldSubmitFunctions = `      // 14. Contact Form Submissions
      async function handleFormSubmit(e) {
        e.preventDefault();
        const submitBtn = document.getElementById('form-submit-btn');
        const statusBox = document.getElementById('form-status');
        const name = document.getElementById('form-name').value;
        const phone = document.getElementById('form-phone').value;
        const email = document.getElementById('form-email').value;
        const service = document.getElementById('form-service').value;
        const notes = document.getElementById('form-notes').value;

        if (submitBtn) submitBtn.disabled = true;
        if (statusBox) {
          statusBox.classList.remove('hidden');
          statusBox.className = 'text-xs p-3 rounded-xl font-medium bg-slate-800 text-[#D4AF37]';
          statusBox.textContent = 'Transmitting inquiry to CORE LINK desk...';
        }

        try {
          const res = await fetch('/api/inquiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullName: name, phone, email, service, notes })
          });
          const data = await res.json();
          if (res.ok && data.success) {
            statusBox.className = 'text-xs p-3 rounded-xl font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/40';
            statusBox.textContent = 'Inquiry transmitted successfully. Our administrative desk in Ajman will contact you promptly.';
            document.getElementById('contact-form').reset();
          } else {
            statusBox.className = 'text-xs p-3 rounded-xl font-medium bg-amber-500/20 text-amber-300 border border-amber-500/40';
            statusBox.textContent = data.error || 'Inquiry submitted. You can also reach our Ajman desk directly at [PHONE NUMBER] or on WhatsApp [WHATSAPP NUMBER].';
          }
        } catch (err) {
          statusBox.className = 'text-xs p-3 rounded-xl font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/40';
          statusBox.textContent = 'Inquiry received. For immediate assistance, reach our Ajman office at [PHONE NUMBER] or on WhatsApp [WHATSAPP NUMBER].';
        } finally {
          if (submitBtn) submitBtn.disabled = false;
        }
      }`;

const newSubmitFunctions = `      // 14. Contact Form Submissions via FormSubmit (https://formsubmit.co/ajax/info@corelinkservices.ae)
      async function handleFormSubmit(e) {
        e.preventDefault();
        const form = document.getElementById('contact-form');
        const submitBtn = document.getElementById('form-submit-btn');
        const statusBox = document.getElementById('form-status');
        
        const nameInput = document.getElementById('form-name');
        const phoneInput = document.getElementById('form-phone');
        const emailInput = document.getElementById('form-email');
        const serviceInput = document.getElementById('form-service');
        const messageInput = document.getElementById('form-message');
        const honeyInput = document.getElementById('form-honey');

        const name = (nameInput?.value || '').trim();
        const phone = (phoneInput?.value || '').trim();
        const email = (emailInput?.value || '').trim();
        const service = serviceInput?.value || 'Transactions Follow-up';
        const message = (messageInput?.value || '').trim();
        const honey = (honeyInput?.value || '').trim();

        // 1. Spam honeypot check
        if (honey) {
          console.warn('Bot submission prevented.');
          return false;
        }

        // 2. Client-side Validation
        if (!name) {
          showStatus(statusBox, 'error', 'Please enter your full name.');
          nameInput?.focus();
          return false;
        }
        if (!phone) {
          showStatus(statusBox, 'error', 'Please enter your phone or WhatsApp number.');
          phoneInput?.focus();
          return false;
        }
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!email || !emailRegex.test(email)) {
          showStatus(statusBox, 'error', 'Please enter a valid email address.');
          emailInput?.focus();
          return false;
        }
        if (!message) {
          showStatus(statusBox, 'error', 'Please provide a message describing your inquiry.');
          messageInput?.focus();
          return false;
        }

        // 3. Loading state on button
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="inline-block w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span><span>Sending inquiry to info@corelinkservices.ae...</span>';
        }
        showStatus(statusBox, 'loading', 'Transmitting inquiry to official desk...');

        // 4. Send via FormSubmit AJAX to info@corelinkservices.ae
        try {
          const payload = {
            name,
            phone,
            email,
            service,
            message,
            _subject: 'New Inquiry from CORE LINK Website',
            _template: 'table',
            _captcha: 'false'
          };

          const response = await fetch('https://formsubmit.co/ajax/info@corelinkservices.ae', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
          });

          const result = await response.json();

          if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
            // Green success message
            showStatus(statusBox, 'success', 'Thank you! We will contact you shortly');
            form.reset();
          } else {
            throw new Error(result.message || 'Form submission encountered an issue.');
          }
        } catch (err) {
          // Red error message with fallback button opening mailto:info@corelinkservices.ae
          const mailtoFallback = 'mailto:info@corelinkservices.ae?subject=' + encodeURIComponent('Inquiry: ' + service) + '&body=' + encodeURIComponent('Name: ' + name + '\\nPhone: ' + phone + '\\nEmail: ' + email + '\\n\\nMessage:\\n' + message);
          const errorHtml = '<div class="space-y-2">' +
            '<div>Unable to send inquiry automatically. Please use the direct mail fallback below:</div>' +
            '<a href="' + mailtoFallback + '" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/20 border border-red-500/40 text-red-200 hover:bg-red-500/30 text-xs font-bold">' +
            '<span>Open Email App to Send to info@corelinkservices.ae</span>' +
            '</a>' +
            '</div>';
          showStatus(statusBox, 'error', errorHtml, true);
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Submit Inquiry to info@corelinkservices.ae</span>';
          }
        }
      }

      function showStatus(box, type, content, isHtml = false) {
        if (!box) return;
        box.classList.remove('hidden');
        if (type === 'loading') {
          box.className = 'text-xs p-3.5 rounded-xl font-medium bg-slate-800 text-[#D4AF37] border border-[#D4AF37]/30';
        } else if (type === 'success') {
          box.className = 'text-xs p-4 rounded-xl font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40';
        } else {
          box.className = 'text-xs p-4 rounded-xl font-medium bg-red-500/20 text-red-300 border border-red-500/40';
        }
        if (isHtml) {
          box.innerHTML = content;
        } else {
          box.textContent = content;
        }
        if (typeof gsap !== 'undefined') {
          gsap.from(box, { y: 10, opacity: 0, duration: 0.35, ease: 'power2.out' });
        }
      }`;

html = html.replace(oldSubmitFunctions, newSubmitFunctions);

// Also replace modal form placeholder text
html = html.replace(/\[PHONE NUMBER\]/g, '+971 6 805 5093');
html = html.replace(/\[WHATSAPP NUMBER\]/g, '+971 56 350 6552');
html = html.replace(/\[EMAIL\]/g, 'info@corelinkservices.ae');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html! New length:', html.length);
