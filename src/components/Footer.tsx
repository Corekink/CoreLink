import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { BRANDING, getWhatsAppUrl } from '../data/branding';
import { toast } from './ui/toaster';

interface FooterProps {
  onOpenInquiry?: (service?: string) => void;
  onNavigate?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText(null);
    const cleanEmail = emailInput.trim();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      toast({
        title: 'Valid Email Required',
        description: 'Please enter a valid email address to subscribe.',
        variant: 'destructive',
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: 'Newsletter Subscriber',
          email: cleanEmail,
          service: 'UAE Immigration & Regulatory Bulletin Subscription',
          source: 'Footer Newsletter Form',
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Server could not process subscription.');
      }

      setSubscribed(true);
      setEmailInput('');
      toast({
        title: 'Subscription Confirmed',
        description: 'You will receive accredited UAE regulatory alerts directly in your inbox.',
        variant: 'success',
      });
    } catch (err: any) {
      console.warn('[Newsletter Notice]', err?.message || err);
      const msg = err.message || 'We could not send your subscription right now. Please contact us on WhatsApp +971 56 805 5093 or call 06 805 5093.';
      setErrorText(msg);
      toast({
        title: 'Subscription Notice',
        description: msg,
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Structured Sitemap Sections
  const sitemap = {
    company: [
      { label: 'Home Page', path: '/' },
      { label: 'About Core Link', path: '/about' },
      { label: 'All Services Directory', path: '/services' },
      { label: 'Agency Profile & Credentials', path: '/agency' },
      { label: 'Track Application / Profile', path: '/profile' },
      { label: 'Contact & Branch Locations', path: '/contact' },
    ],
    visas: [
      { label: 'UAE Golden & Investor Visa', path: '/uae-services' },
      { label: 'Schengen & Europe Visa', path: '/europe-visa' },
      { label: 'International Tourist Visas', path: '/visa' },
      { label: 'Family & Dependent Visas', path: '/uae-services' },
      { label: 'Visa Cancellation & Status Change', path: '/uae-services' },
      { label: 'VIP Express Medical & Emirates ID', path: '/uae-services' },
    ],
    corporate: [
      { label: 'Mainland LLC & Freezone Setup', path: '/business-services' },
      { label: 'Corporate PRO & Government Liaison', path: '/business-services' },
      { label: 'MOHRE & Tasheel Labor Contracts', path: '/business-services' },
      { label: 'Commercial License Renewal', path: '/business-services' },
      { label: 'MOFA & Embassy Legal Attestation', path: '/business-services' },
      { label: 'Ejari & Virtual Office Approvals', path: '/business-services' },
    ],
    manpowerTravel: [
      { label: 'Executive & Skilled Manpower', path: '/manpower' },
      { label: 'Blue-Collar & Workforce Supply', path: '/manpower' },
      { label: 'Domestic Helpers & Nanny Visas', path: '/manpower' },
      { label: 'Worldwide Flight Ticketing', path: '/ticketing' },
      { label: 'Corporate Travel Management', path: '/ticketing' },
      { label: 'VIP Airport Concierge Services', path: '/ticketing' },
    ],
    legal: [
      { label: 'Privacy & Data Protection Policy', path: '/privacy-policy' },
      { label: 'Terms of Service & Engagement', path: '/terms' },
      { label: 'Official Visa & Regulatory Disclaimer', path: '/visa-disclaimer' },
    ],
  };

  return (
    <footer id="main-footer" className="bg-[#050B14] text-[#CBD5E1] relative z-20 border-t border-[#1E2E4A]/30 pt-16 pb-12 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none opacity-50" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-12">
        
        {/* ========================================================= */}
        {/* 1. NEWSLETTER & VIP REGULATORY INTELLIGENCE BULLETIN FORM */}
        {/* ========================================================= */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-[#0B1528] via-[#12203D] to-[#0B1528] border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] font-mono font-bold uppercase tracking-wider">
                <Icons.BellRing className="w-3.5 h-3.5" />
                UAE IMMIGRATION & REGULATORY UPDATES
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-sans tracking-tight">
                Subscribe to the Official Core Link Bulletin
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                Receive instant circulars on UAE ICP Golden Visa rule updates, GDRFA residency policies, MOHRE labor quota reforms, and international visa advisories.
              </p>
            </div>

            <div className="w-full lg:max-w-md">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-fadeIn">
                  <Icons.CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div className="text-xs">
                    <p className="font-bold text-white">Subscription Confirmed</p>
                    <p className="text-slate-300">You will receive accredited UAE regulatory alerts directly in your inbox.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2.5">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <div className="relative flex-1">
                      <Icons.Mail className="w-4 h-4 text-[#CBD5E1] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="Enter your corporate or personal email..."
                        className="w-full pl-10 pr-4 py-3 bg-[#050B14] border border-[#1E2E4A]/40 rounded-xl text-white text-xs placeholder:text-[#CBD5E1]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C365] to-[#1E2E4A] hover:from-[#D4AF37] hover:to-[#D4AF37] text-[#050B14] font-black text-xs uppercase tracking-wider shrink-0 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {submitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-[#050B14] border-t-transparent rounded-full animate-spin" />
                          <span>Joining...</span>
                        </>
                      ) : (
                        <>
                          <span>Subscribe</span>
                          <Icons.ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                  {errorText && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Icons.AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{errorText}</span>
                      </div>
                      <a
                        href={getWhatsAppUrl('newsletter-subscription')}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#D4AF37] underline font-bold whitespace-nowrap"
                      >
                        Subscribe via WhatsApp
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-[10.5px] text-[#CBD5E1] font-mono">
                    <Icons.Lock className="w-3 h-3 text-[#D4AF37]" />
                    <span>Strict confidentiality. No spam. Instant 1-click unsubscribe anytime.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. MAIN SITEMAP & COMPREHENSIVE 5-COLUMN FOOTER STRUCTURE */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-4">
          
          {/* Col 1: Brand, Tagline & Direct Communications (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Brand Logo & Typography */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#D4AF37] via-[#D4AF37] to-[#1E2E4A] p-[1.5px] shadow-lg shadow-[#D4AF37]/20 shrink-0">
                <div className="w-full h-full bg-[#050B14] rounded-[14px] overflow-hidden flex items-center justify-center p-0.5">
                  <img
                    src={BRANDING.logoUrl}
                    alt="CORE LINK ADMINISTRATIVE SERVICES"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-[12px]"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white font-sans">
                  CORE<span className="text-[#D4AF37] ml-0.5">LINK</span>
                </span>
                <span className="text-[9px] tracking-[0.18em] uppercase text-[#CBD5E1] font-bold font-mono">
                  ADMINISTRATIVE SERVICES
                </span>
                <span className="text-[8px] tracking-[0.14em] uppercase text-[#D4AF37] font-semibold font-mono">
                  VISA · TYPING · LICENSING · TICKETING
                </span>
              </div>
            </div>

            {/* Corporate Summary */}
            <p className="text-xs text-[#CBD5E1] leading-relaxed">
              Leading UAE accredited government liaison and corporate typing agency. Specializing in rapid residency processing, Golden Visas, Mainland/Freezone corporate structuring, manpower mobilization, and international ticketing.
            </p>

            {/* Instant Contact Actions (Call Landline, Mobile/WhatsApp, Email) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="tel:+97168055093"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold transition-all hover:border-[#D4AF37] shadow-sm"
                title="Call Ajman Office 06 805 5093"
              >
                <Icons.PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono">06 805 5093</span>
              </a>

              <a
                href={BRANDING.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold transition-all hover:border-emerald-400 shadow-sm"
                title="Chat on WhatsApp (+971 56 805 5093)"
              >
                <Icons.MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>056 805 5093</span>
              </a>

              <a
                href={`mailto:${BRANDING.emails.info}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-[#1E2E4A]/40 text-white text-xs font-semibold transition-all hover:border-[#D4AF37]"
              >
                <Icons.Mail className="w-3.5 h-3.5 text-[#CBD5E1]" />
                <span>Email HQ</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="space-y-2 pt-1">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest font-bold block">Official Social Media Channels:</span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#0B1528] border border-[#1E2E4A]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] text-[#CBD5E1] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                  aria-label="Instagram"
                >
                  <Icons.Instagram className="w-4 h-4" />
                </a>
                <a
                  href={getWhatsAppUrl('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#0B1528] border border-[#1E2E4A]/40 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400 text-[#CBD5E1] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                  aria-label="WhatsApp Channel"
                >
                  <Icons.MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#0B1528] border border-[#1E2E4A]/40 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 text-[#CBD5E1] flex items-center justify-center text-xs font-bold transition-all duration-300 hover:scale-110 shadow-md"
                  aria-label="LinkedIn"
                >
                  <Icons.Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#0B1528] border border-[#1E2E4A]/40 hover:border-blue-600 hover:bg-blue-600/10 hover:text-blue-400 text-[#CBD5E1] flex items-center justify-center text-xs font-bold transition-all duration-300 hover:scale-110 shadow-md"
                  aria-label="Facebook"
                >
                  <Icons.Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#0B1528] border border-[#1E2E4A]/40 hover:border-red-500 hover:bg-red-500/10 hover:text-red-400 text-[#CBD5E1] flex items-center justify-center text-xs font-bold transition-all duration-300 hover:scale-110 shadow-md"
                  aria-label="YouTube"
                >
                  <Icons.Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#0B1528] border border-[#1E2E4A]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] text-[#CBD5E1] flex items-center justify-center text-xs font-bold transition-all duration-300 hover:scale-110 shadow-md"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.81 4.48 6.3 6.3 0 0 0 1.94-4.52V8.76a8.28 8.28 0 0 0 4.84 1.56V6.87a4.87 4.87 0 0 1-1-.18z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Col 2: SITEMAP - MAIN NAVIGATION & COMPANY (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-[#1E2E4A]/40">
              <Icons.Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <h4 className="text-xs font-bold font-mono tracking-[0.18em] text-white uppercase">
                NAVIGATION
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs text-[#CBD5E1]">
              {sitemap.company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#D4AF37] group-hover:text-[#D4AF37] transition-colors text-[10px]">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: SITEMAP - VISA & IMMIGRATION (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-[#1E2E4A]/40">
              <Icons.Stamp className="w-3.5 h-3.5 text-[#D4AF37]" />
              <h4 className="text-xs font-bold font-mono tracking-[0.18em] text-white uppercase">
                VISA & IMMIGRATION
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs text-[#CBD5E1]">
              {sitemap.visas.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#D4AF37] group-hover:text-[#D4AF37] transition-colors text-[10px]">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: SITEMAP - BUSINESS & PRO (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-[#1E2E4A]/40">
              <Icons.Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <h4 className="text-xs font-bold font-mono tracking-[0.18em] text-white uppercase">
                CORPORATE & PRO
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs text-[#CBD5E1]">
              {sitemap.corporate.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#D4AF37] group-hover:text-[#D4AF37] transition-colors text-[10px]">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: DIRECT CONTACT & LOCATIONS (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-[#1E2E4A]/40">
              <Icons.MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <h4 className="text-xs font-bold font-mono tracking-[0.18em] text-white uppercase">
                HQ & INQUIRIES
              </h4>
            </div>
            
            <div className="space-y-3 text-xs text-[#CBD5E1]">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#CBD5E1]/70 uppercase tracking-wider block">Office Location</span>
                <p className="leading-snug text-white font-medium">
                  Shop No. 9, Liwara 1, CC8V+4WG
                </p>
                <p className="text-[#CBD5E1]/70 text-[11px]">
                  Al Bustan, Ajman, UAE (Lic. 140290)
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-mono text-[#CBD5E1]/70 uppercase tracking-wider block">Phone Lines</span>
                <div className="space-y-1 text-[11px]">
                  <div>
                    <a href="tel:+97168055093" className="hover:text-[#D4AF37] transition-colors font-medium text-white flex items-center gap-1.5">
                      <Icons.PhoneCall className="w-3 h-3 text-[#D4AF37] shrink-0" />
                      <span className="font-mono">06 805 5093</span>
                      <span className="text-[10px] text-slate-400 font-normal">(Ajman Landline)</span>
                    </a>
                  </div>
                  <div>
                    <a href="https://wa.me/971568055093" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors font-medium text-emerald-300 flex items-center gap-1.5">
                      <Icons.MessageSquare className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="font-mono">+971 56 805 5093</span>
                      <span className="text-[10px] text-slate-400 font-normal">(Mobile / WA)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-mono text-[#CBD5E1]/70 uppercase tracking-wider block">Direct Inboxes</span>
                <div className="space-y-0.5">
                  <div>
                    <a href="mailto:admin@corelinkservices.ae" className="hover:text-[#D4AF37] transition-colors font-medium text-[#CBD5E1] block truncate">
                      admin@corelinkservices.ae
                    </a>
                  </div>
                  <div>
                    <a href="mailto:info@corelinkservices.ae" className="hover:text-[#D4AF37] transition-colors text-[#CBD5E1]/80 block truncate">
                      info@corelinkservices.ae
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-mono text-[#CBD5E1]/70 uppercase tracking-wider block">Operational Hours</span>
                <div className="flex items-center gap-2 text-[#CBD5E1] text-[11px]">
                  <Icons.Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>Sat – Thu · 9:00 AM – 7:00 PM</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono block">24/7 VIP Emergency Helpline</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* 3. OFFICIAL REGULATORY DISCLAIMER & TRUST BADGES          */}
        {/* ========================================================= */}
        <div className="rounded-2xl bg-[#0B1528] border border-[#1E2E4A]/40 p-5 sm:p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
              <Icons.ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-white">
                  Regulatory Transparency & Non-Affiliation Declaration
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-[#1E2E4A]/40 text-[#CBD5E1] text-[10px] font-mono font-bold">
                  UAE COMPLIANCE CERTIFIED
                </span>
              </div>
              <p className="text-[11px] text-[#CBD5E1] leading-relaxed">
                CORE LINK Administrative Services operates as an independent licensed commercial document clearing and administrative support agency in the UAE. Visa issuance, residency stamping, and government authorizations remain strictly under the sovereign jurisdiction of the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP), GDRFA Dubai, MOHRE, and relevant consulates.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="self-end md:self-center shrink-0 p-3 rounded-xl bg-[#050B14] hover:bg-[#12203D] border border-[#1E2E4A]/40 text-[#CBD5E1] hover:text-white transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer"
            title="Back to Top"
          >
            <span>Top</span>
            <Icons.ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>

        {/* ========================================================= */}
        {/* 4. QUICK LINKS TO LEGAL PAGES & COPYRIGHT BAR             */}
        {/* ========================================================= */}
        <div className="pt-6 border-t border-[#1E2E4A]/30 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-[#CBD5E1]/80">
          
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} CORE LINK Administrative Services. All Rights Reserved.</p>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-[#CBD5E1]/60 font-mono text-[11px]">Trade License & PRO Document Clearing Registration</span>
          </div>
          
          {/* Direct Legal Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 font-medium text-xs">
            <Link
              to="/privacy-policy"
              className="text-[#CBD5E1] hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[#CBD5E1] hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/visa-disclaimer"
              className="text-[#CBD5E1] hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline"
            >
              Visa Disclaimer
            </Link>
            <a
              href="https://corelinkservices.ae"
              target="_blank"
              rel="noreferrer"
              className="text-[#D4AF37] hover:text-white transition-colors inline-flex items-center gap-1 font-mono font-semibold"
            >
              <span>corelinkservices.ae</span>
              <Icons.ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
