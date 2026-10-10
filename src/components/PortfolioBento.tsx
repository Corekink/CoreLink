import React from 'react';
import * as Icons from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { IMAGES } from '../data/images';
import { VIEWPORT_CONFIG, fadeUp, fadeDown, staggerContainer, staggerItem } from '@/lib/animations';

interface PortfolioBentoProps {
  onSelectService: (serviceName: string) => void;
}

export const PortfolioBento: React.FC<PortfolioBentoProps> = ({ onSelectService }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services-portfolio" className="bg-[#050B14] py-12 lg:py-16 relative text-white border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header Eyebrow & Title */}
        <motion.div
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <motion.div
            variants={fadeDown}
            className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-3.5 shadow-sm"
          >
            <Icons.Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            COMPREHENSIVE SERVICES PORTFOLIO
          </motion.div>
          
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans"
          >
            Authorised UAE Solutions, One Trusted Desk
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-3.5 text-sm sm:text-base text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed"
          >
            From fast-track UAE Golden Visas and Emirates ID biometrics to turnkey Dubai LLC company formations and global Schengen visas.
          </motion.p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="space-y-6">
          
          {/* Row 1: Card 01 (Wide) & Card 02 (Medium) */}
          <motion.div
            initial={shouldReduceMotion ? {} : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT_CONFIG}
            variants={staggerContainer(0.15, 0.05)}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Card 01: UAE Visa & Residency Stamping */}
            <motion.div
              variants={staggerItem}
              onClick={() => onSelectService('UAE Visa & Immigration')}
              className="lg:col-span-7 group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_45px_rgba(212,175,55,0.25)] border border-white/10 hover:border-[#D4AF37]/80 transition-all duration-500 cursor-pointer bg-[#0E1626] min-h-[360px] sm:min-h-[400px] flex flex-col justify-between p-6 sm:p-8 hover:-translate-y-2"
            >
              <img
                src={IMAGES.visaProcessing}
                alt="UAE Visa & Residency Processing Desk"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-60 group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/75 to-[#050B14]/30" />
              
              {/* Card Top */}
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-3xl font-black text-[#D4AF37]/40 font-mono group-hover:text-[#D4AF37] transition-colors">01</span>
                <span className="px-3.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#D4AF37]/40 text-[11px] font-bold font-mono tracking-wider text-[#D4AF37] uppercase shadow-md">
                  ICP & GDRFA IMMIGRATION
                </span>
              </div>

              {/* Card Bottom */}
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  24-48 HOUR FAST TRACK CLEARANCE
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight group-hover:text-[#D4AF37] transition-colors">
                  UAE Residency, Golden Visa & Family Sponsorship
                </h3>
                <p className="text-sm text-slate-300 font-sans leading-relaxed max-w-xl">
                  Nomination filing for 10-Year Golden Visas, Investor 2-Year Residence Permits, Spouse & Children Visas, and Salem 2-Hour Medical Fitness typing.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] group-hover:text-white transition-colors pt-1">
                  <span>Start Visa Application</span>
                  <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Card 02: Business Setup & Company Formation */}
            <motion.div
              variants={staggerItem}
              onClick={() => onSelectService('Business Setup')}
              className="lg:col-span-5 group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_45px_rgba(212,175,55,0.25)] border border-white/10 hover:border-[#D4AF37]/80 transition-all duration-500 cursor-pointer bg-[#0E1626] min-h-[360px] sm:min-h-[400px] flex flex-col justify-between p-6 sm:p-8 hover:-translate-y-2"
            >
              <img
                src={IMAGES.businessSetup}
                alt="Dubai Mainland & Freezone Business Setup"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-60 group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/75 to-[#050B14]/30" />
              
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-3xl font-black text-[#D4AF37]/40 font-mono group-hover:text-[#D4AF37] transition-colors">02</span>
                <span className="px-3.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#D4AF37]/40 text-[11px] font-bold font-mono tracking-wider text-[#D4AF37] uppercase shadow-md">
                  MAINLAND & FREE ZONE
                </span>
              </div>

              <div className="relative z-10 space-y-2.5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight group-hover:text-[#D4AF37] transition-colors">
                  Dubai LLC & Trade Licensing
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Turnkey commercial formation, DED instant licensing, MoA notarization, corporate bank account assistance, and Ejari commercial leases.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] group-hover:text-white transition-colors pt-1">
                  <span>Explore Formation Packages</span>
                  <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Row 2: Card 03, Card 04, Card 05 (3 Columns) */}
          <motion.div
            initial={shouldReduceMotion ? {} : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT_CONFIG}
            variants={staggerContainer(0.12, 0.05)}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Card 03: Europe & International Visas */}
            <motion.div
              variants={staggerItem}
              onClick={() => onSelectService('Europe & International Visas')}
              className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_45px_rgba(212,175,55,0.22)] border border-white/10 hover:border-[#D4AF37]/80 transition-all duration-500 cursor-pointer bg-[#0E1626] min-h-[320px] flex flex-col justify-between p-6 sm:p-7 hover:-translate-y-2"
            >
              <img
                src={IMAGES.parisEiffel}
                alt="Schengen & Worldwide Visas"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-55 group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/30" />
              
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-2xl font-black text-[#D4AF37]/40 font-mono group-hover:text-[#D4AF37] transition-colors">03</span>
                <span className="px-3 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-[#D4AF37]/30 text-[10px] font-bold font-mono tracking-wider text-[#D4AF37] uppercase shadow-md">
                  SCHENGEN · UK · US
                </span>
              </div>

              <div className="relative z-10 space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-[#D4AF37] transition-colors">
                  International Travel Visas
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Complete VFS file preparation, travel insurance, embassy appointments, and itinerary verification for UAE residents.
                </p>
              </div>
            </motion.div>

            {/* Card 04: Corporate PRO & Government Liaison */}
            <motion.div
              variants={staggerItem}
              onClick={() => onSelectService('PRO & Government Services')}
              className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_45px_rgba(212,175,55,0.22)] border border-white/10 hover:border-[#D4AF37]/80 transition-all duration-500 cursor-pointer bg-[#0E1626] min-h-[320px] flex flex-col justify-between p-6 sm:p-7 hover:-translate-y-2"
            >
              <img
                src={IMAGES.corporatePRO}
                alt="PRO Government Liaison"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-55 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/30" />
              
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-2xl font-black text-[#D4AF37]/40 font-mono group-hover:text-[#D4AF37] transition-colors">04</span>
                <span className="px-3 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-[#D4AF37]/30 text-[10px] font-bold font-mono tracking-wider text-[#D4AF37] uppercase shadow-md">
                  MOHRE & TASHEEL
                </span>
              </div>

              <div className="relative z-10 space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-[#D4AF37] transition-colors">
                  Corporate PRO Retainers
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Dedicated PRO executives handling labour quotas, offer letters, Tawjeeh, fine reductions, and municipal permits.
                </p>
              </div>
            </motion.div>

            {/* Card 05: Document Clearing & Legal Notary */}
            <motion.div
              variants={staggerItem}
              onClick={() => onSelectService('Document Clearing & Legal Translation')}
              className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_45px_rgba(212,175,55,0.22)] border border-white/10 hover:border-[#D4AF37]/80 transition-all duration-500 cursor-pointer bg-[#0E1626] min-h-[320px] flex flex-col justify-between p-6 sm:p-7 hover:-translate-y-2"
            >
              <img
                src={IMAGES.attestation}
                alt="Document Clearing & Legal Attestation"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-55 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/30" />
              
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-2xl font-black text-[#D4AF37]/40 font-mono group-hover:text-[#D4AF37] transition-colors">05</span>
                <span className="px-3 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-[#D4AF37]/30 text-[10px] font-bold font-mono tracking-wider text-[#D4AF37] uppercase shadow-md">
                  MOFA & NOTARY
                </span>
              </div>

              <div className="relative z-10 space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-[#D4AF37] transition-colors">
                  Attestation & Translation
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ministry of Foreign Affairs (MOFA) degree legalisation, embassy apostilles, court sworn Arabic translations, and PoA notarization.
                </p>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
