import React from 'react';
import * as Icons from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { IMAGES } from '../data/images';
import { BRANDING, getWhatsAppUrl } from '../data/branding';
import {
  VIEWPORT_CONFIG,
  headingLabelVariant,
  headingTitleVariant,
  headingDescVariant,
  staggerContainer,
  cardEntrance,
  BUTTON_HOVER,
  BUTTON_TAP,
} from '@/lib/animations';

interface AboutAgencyProps {
  onOpenInquiry?: (service?: string) => void;
}

export const AboutAgency: React.FC<AboutAgencyProps> = ({ onOpenInquiry }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about-section" className="py-16 lg:py-24 bg-[#050B14] relative overflow-hidden border-t border-white/10">
      {/* Background Subtle Radial Light */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3D Layered Photo Composition & Floating Information Cards */}
          <div
            className="lg:col-span-6 relative"
            style={{ perspective: '1100px' }}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* Main Primary Image with scale: 1.05 -> 1 on entrance */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 group aspect-[4/3]"
              >
                <img
                  src={IMAGES.companyFormation}
                  alt="CORE LINK Corporate Headquarters & Government Liaison"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-80" />
                
                {/* Image Top Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#D4AF37]/50 text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider shadow-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    DUBAI & AJMAN AUTHORIZED
                  </span>
                </div>
              </motion.div>

              {/* Secondary Overlapping Image (Bottom Right) with subtle depth */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9, y: 25 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="hidden sm:block absolute -bottom-8 -right-6 w-64 h-48 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_20px_45px_rgba(0,0,0,0.85)] bg-slate-950 z-20 group"
                style={{
                  transform: shouldReduceMotion ? 'none' : 'translateZ(20px)',
                }}
              >
                <img
                  src={IMAGES.tradeLicense}
                  alt="Official Stamped Government Document & Contract Clearance"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={300}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 text-[11px] font-mono text-slate-200 font-bold flex items-center justify-between">
                  <span>Direct Ministry Lodgement</span>
                  <span className="text-[#D4AF37]">100% Verified</span>
                </div>
              </motion.div>

              {/* Floating Information Card (Requested: y: 20 -> 0, opacity: 0 -> 1) */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="absolute -top-6 -right-3 sm:right-6 bg-gradient-to-br from-[#0C1527]/95 to-[#070D18]/95 backdrop-blur-xl border-2 border-[#D4AF37]/70 p-4 sm:p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] z-30 flex items-center gap-4 transition-all"
                style={{
                  transform: shouldReduceMotion ? 'none' : 'translateZ(35px)',
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#D4AF37] via-[#E5C365] to-[#B89628] flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shrink-0">
                  12+
                </div>
                <div>
                  <div className="text-xs font-mono text-[#D4AF37] font-bold uppercase tracking-wider">Years of Experience</div>
                  <div className="text-sm font-bold text-white leading-tight">UAE Government Liaison</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">99.4% Clearance Success</div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Column: Narrative & Feature Highlights with Stagger */}
          <motion.div
            initial={shouldReduceMotion ? {} : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT_CONFIG}
            variants={{
              hidden: { opacity: 0, x: 35 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  staggerChildren: 0.12,
                },
              },
            }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Tagline / Eyebrow */}
            <motion.div
              variants={headingLabelVariant}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 shadow-sm"
            >
              <Icons.ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              ABOUT CORE LINK AGENCY
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={headingTitleVariant}
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans text-white tracking-tight leading-[1.15]"
            >
              We Bridge The Gap Between Your Goals & <span className="text-[#D4AF37]">UAE Authorities</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={headingDescVariant}
              className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans"
            >
              Headquartered with walk-in facilitation desks across <strong>Dubai</strong> and <strong>Ajman</strong>, CORE LINK is an accredited administrative clearing agency. We eliminate government red tape by providing electronic typing, fast-track residency stamping, 10-Year Golden Visas, and turnkey company formation.
            </motion.p>

            {/* 2x2 Feature Highlights with 3D depth */}
            <motion.div
              variants={staggerContainer(0.1, 0.05)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              <motion.div
                variants={cardEntrance}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 rounded-2xl bg-[#0C1527]/80 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 group cursor-default shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform">
                  <Icons.Zap className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white font-sans group-hover:text-[#D4AF37] transition-colors">Direct Ministry Portals</h4>
                <p className="text-xs text-slate-400 mt-1">Instant lodgement with ICP, GDRFA, MOHRE Tasheel, and DED.</p>
              </motion.div>

              <motion.div
                variants={cardEntrance}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 rounded-2xl bg-[#0C1527]/80 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 group cursor-default shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                  <Icons.ShieldAlert className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white font-sans group-hover:text-[#D4AF37] transition-colors">Zero Rejection SLA</h4>
                <p className="text-xs text-slate-400 mt-1">Pre-submission legal audits guarantee 99.4% first-time approval rate.</p>
              </motion.div>

              <motion.div
                variants={cardEntrance}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 rounded-2xl bg-[#0C1527]/80 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 group cursor-default shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
                  <Icons.FileCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white font-sans group-hover:text-[#D4AF37] transition-colors">Sworn MOFA Attestation</h4>
                <p className="text-xs text-slate-400 mt-1">Global embassy legalization & Ministry of Foreign Affairs stamping.</p>
              </motion.div>

              <motion.div
                variants={cardEntrance}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 rounded-2xl bg-[#0C1527]/80 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 group cursor-default shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                  <Icons.Truck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white font-sans group-hover:text-[#D4AF37] transition-colors">VIP Courier Service</h4>
                <p className="text-xs text-slate-400 mt-1">Doorstep passport collection and Emirates ID delivery across UAE.</p>
              </motion.div>
            </motion.div>

            {/* Bottom Action & Call Desk */}
            <motion.div
              variants={cardEntrance}
              className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 border-t border-white/10"
            >
              <motion.button
                onClick={() => onOpenInquiry?.('About CORE LINK Agency Consultation')}
                whileHover={BUTTON_HOVER}
                whileTap={BUTTON_TAP}
                className="group relative px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89628] text-slate-950 font-bold text-sm shadow-xl shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                <span className="relative z-10">Book Free Consultation</span>
                <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
              </motion.button>

              <div className="flex flex-wrap items-center gap-2">
                <motion.a
                  href="tel:+97168055093"
                  whileHover={BUTTON_HOVER}
                  whileTap={BUTTON_TAP}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-[#D4AF37]/30 text-white font-mono text-xs flex items-center justify-center gap-2 transition-colors"
                  title="Call Ajman HQ (06 805 5093)"
                >
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center">
                    <Icons.PhoneCall className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-400">Ajman HQ</div>
                    <div className="font-bold text-[#D4AF37]">06 805 5093</div>
                  </div>
                </motion.a>

                <motion.a
                  href={getWhatsAppUrl('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={BUTTON_HOVER}
                  whileTap={BUTTON_TAP}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-emerald-500/30 text-white font-mono text-xs flex items-center justify-center gap-2 transition-colors"
                  title="WhatsApp (+971 56 805 5093)"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Icons.MessageSquare className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-400">Mobile / WA</div>
                    <div className="font-bold text-emerald-400">056 805 5093</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutAgency;
