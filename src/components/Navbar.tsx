import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRANDING, getWhatsAppUrl } from '@/data/branding';

interface NavbarProps {
  onOpenInquiry: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'UAE Clearance', path: '/uae-services' },
    { label: 'Visas', path: '/visa' },
    { label: 'Business Setup', path: '/business-services' },
    { label: 'Manpower', path: '/manpower' },
    { label: 'Ticketing', path: '/ticketing' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050B14]/98 backdrop-blur-xl border-b border-[#D4AF37]/25 shadow-[0_12px_32px_rgba(0,0,0,0.8)]'
          : 'bg-[#050B14]/85 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-[62px] sm:h-[66px]' : 'h-[72px] sm:h-[78px]'
          }`}
        >
          {/* Brand Identity / Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
            aria-label="CORE LINK Administrative Services Home"
            onClick={handleMobileNavClick}
          >
            <div
              className={`rounded-xl bg-gradient-to-tr from-[#D4AF37] via-[#D4AF37] to-[#1E2E4A] p-[1.5px] shadow-md shadow-[#D4AF37]/20 group-hover:shadow-[#D4AF37]/40 transition-all duration-300 ${
                isScrolled ? 'w-9 h-9' : 'w-10 h-10'
              }`}
            >
              <div className="w-full h-full bg-[#050B14] rounded-[10px] overflow-hidden flex items-center justify-center p-0.5">
                <img
                  src={BRANDING.logoUrl}
                  alt="CORE LINK Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-[8px] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline leading-none">
                <span
                  className={`font-black tracking-tight text-white font-sans transition-all duration-300 ${
                    isScrolled ? 'text-base' : 'text-base sm:text-lg'
                  }`}
                >
                  CORE<span className="text-[#D4AF37] ml-0.5">LINK</span>
                </span>
              </div>
              <span className="text-[7.5px] sm:text-[8px] tracking-[0.16em] uppercase text-slate-300 font-semibold font-mono mt-1 leading-none">
                ADMINISTRATIVE SERVICES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13px] xl:text-[13.5px] font-medium text-slate-300"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 transition-all duration-200 hover:text-[#D4AF37] hover:-translate-y-0.5 whitespace-nowrap ${
                    isActive ? 'text-[#D4AF37] font-semibold' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] rounded-full shadow-sm shadow-[#D4AF37]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Quick Landline Phone Pill */}
            <a
              href="tel:+97168055093"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/35 hover:border-[#D4AF37]/60 text-[#D4AF37] font-semibold text-xs transition-all duration-200 hover:-translate-y-0.5"
              title="Call Ajman Office (06 805 5093)"
            >
              <Icons.PhoneCall className="w-3.5 h-3.5" />
              <span className="font-mono font-bold">06 805 5093</span>
            </a>

            {/* Quick WhatsApp Pill */}
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400 font-semibold text-xs transition-all duration-200 hover:-translate-y-0.5"
              title="Chat on WhatsApp (+971 56 805 5093)"
            >
              <Icons.MessageSquare className="w-3.5 h-3.5" />
              <span className="font-mono">056 805 5093</span>
            </a>

            {/* Request a Service CTA */}
            <button
              onClick={() => onOpenInquiry('General Service Request')}
              className="group relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E2C56E] to-[#B89628] text-slate-950 font-bold text-xs sm:text-[13px] tracking-tight transition-all duration-200 shadow-md shadow-[#D4AF37]/25 hover:shadow-lg hover:shadow-[#D4AF37]/45 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />
              <span className="relative z-10">Request a Service</span>
              <Icons.ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-1 transition-transform relative z-10" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#070E1A] border-b border-white/10 px-4 py-5 shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2 text-sm max-w-lg mx-auto">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={handleMobileNavClick}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37]'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Quick Action Buttons */}
            <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-1.5 max-w-lg mx-auto">
              <a
                href="tel:+97168055093"
                className="py-2.5 px-2 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] font-bold text-[11px] flex flex-col items-center justify-center gap-1 text-center"
                title="Call 06 805 5093"
              >
                <Icons.PhoneCall className="w-3.5 h-3.5" />
                <span className="font-mono">06 805 5093</span>
              </a>
              <a
                href={getWhatsAppUrl('general')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMobileNavClick}
                className="py-2.5 px-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-[11px] flex flex-col items-center justify-center gap-1 text-center"
              >
                <Icons.MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  handleMobileNavClick();
                  onOpenInquiry('Mobile Navigation Request');
                }}
                className="py-2.5 px-2 rounded-xl bg-[#D4AF37] text-slate-950 font-bold text-[11px] flex flex-col items-center justify-center gap-1 shadow-md cursor-pointer"
              >
                <Icons.ArrowRight className="w-3.5 h-3.5" />
                <span>Request</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
