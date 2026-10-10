import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { IMAGES } from '../data/images';
import { VIEWPORT_CONFIG, fadeUp, fadeDown, staggerContainer, staggerItem } from '@/lib/animations';

interface ExploreServicesVisualProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ExploreServicesVisual: React.FC<ExploreServicesVisualProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'residency' | 'corporate' | 'notary' | 'travel'>('all');
  const shouldReduceMotion = useReducedMotion();

  const allCards = [
    {
      id: 1,
      title: 'UAE Golden Visa (10-Year)',
      category: 'residency',
      badge: 'INVESTOR & TALENT',
      authority: 'GDRFA / ICP',
      sla: '48-72h Approval',
      image: IMAGES.goldenVisa,
      description: 'Nomination file preparation for property owners, executives, investors & creative talents.',
    },
    {
      id: 2,
      title: 'Emirates ID & Salem Medical',
      category: 'residency',
      badge: 'BIOMETRICS & FITNESS',
      authority: 'ICP / DHA',
      sla: '2-Hour Express',
      image: IMAGES.medical,
      description: 'VIP biometrics appointments, smart identity typing, and expedited 2h Salem blood test typing.',
    },
    {
      id: 3,
      title: 'Mainland LLC Company Setup',
      category: 'corporate',
      badge: 'DED COMMERCIAL',
      authority: 'DET Dubai',
      sla: '24h Turnaround',
      image: IMAGES.licensing,
      description: 'Instant commercial trade license, initial approvals, Memorandum of Association, and Ejari.',
    },
    {
      id: 4,
      title: 'Corporate PRO Retainers',
      category: 'corporate',
      badge: 'GOVERNMENT LIAISON',
      authority: 'MOHRE / Tasheel',
      sla: 'Dedicated PRO',
      image: IMAGES.corporatePRO,
      description: 'Labour quota clearance, establishment card renewal, Tawjeeh training & fine reduction appeals.',
    },
    {
      id: 5,
      title: 'MOFA Legal Attestation',
      category: 'notary',
      badge: 'APOSTILLE & NOTARY',
      authority: 'MOFA UAE',
      sla: 'Same Day Pick & Drop',
      image: IMAGES.attestation,
      description: 'Ministry of Foreign Affairs degree attestation, birth/marriage certificates & consular stamps.',
    },
    {
      id: 6,
      title: 'Certified Arabic Legal Translation',
      category: 'notary',
      badge: 'MINISTRY OF JUSTICE',
      authority: 'MOJ UAE',
      sla: 'Instant PDF',
      image: IMAGES.legalTranslation,
      description: 'Court-sworn Arabic translations for contracts, power of attorney, bank statements & litigation.',
    },
    {
      id: 7,
      title: 'Schengen & Europe Tourist Visa',
      category: 'travel',
      badge: 'VFS & EMBASSY',
      authority: 'Schengen Area',
      sla: 'Full Dossier Support',
      image: IMAGES.parisEiffel,
      description: 'Appointment booking, verified flight/hotel vouchers, travel insurance & embassy cover letters.',
    },
    {
      id: 8,
      title: 'Global Air Ticketing & Insurance',
      category: 'travel',
      badge: 'IATA TICKETING',
      authority: 'Global Airlines',
      sla: 'Instant Issuance',
      image: IMAGES.ticketing,
      description: 'Executive corporate travel bookings, flight rescheduling, group fares & mandatory inbound insurance.',
    },
  ];

  const filteredCards = activeTab === 'all' 
    ? allCards 
    : allCards.filter(c => c.category === activeTab);

  return (
    <section id="uae-services" className="bg-[#0A1120] py-12 lg:py-16 relative text-white border-t border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <motion.div
            variants={fadeDown}
            className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-3 shadow-sm"
          >
            <Icons.Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
            DIRECT GOVERNMENT GATEWAY
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans"
          >
            Authorised Service Portfolio
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed"
          >
            Select a service category to explore official government processing timelines, authority certifications, and required documentation.
          </motion.p>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8"
        >
          {[
            { id: 'all', label: 'All Services', icon: Icons.Grid },
            { id: 'residency', label: 'UAE Residency & Golden Visa', icon: Icons.FileCheck },
            { id: 'corporate', label: 'Business Setup & PRO', icon: Icons.Building2 },
            { id: 'notary', label: 'Attestation & Legal Notary', icon: Icons.ShieldCheck },
            { id: 'travel', label: 'Schengen & Global Travel', icon: Icons.Globe },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#b58b3c] text-slate-950 shadow-lg shadow-[#D4AF37]/25 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:-translate-y-0.5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-[#D4AF37]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Dynamic Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={shouldReduceMotion ? {} : 'hidden'}
            animate="visible"
            exit="hidden"
            variants={staggerContainer(0.08, 0.02)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredCards.map((card) => (
              <motion.div
                key={card.id}
                variants={staggerItem}
                onClick={() => onSelectService(card.title)}
                className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_20px_45px_rgba(212,175,55,0.22)] transition-all duration-500 cursor-pointer bg-[#0E1626] h-[340px] sm:h-[360px] flex flex-col justify-between p-6 border border-white/10 hover:border-[#D4AF37]/80 hover:-translate-y-2"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-60 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/75 to-transparent" />
                
                {/* Top Badge & Authority Tag */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-slate-950 bg-[#D4AF37] px-2.5 py-1 rounded-full uppercase shadow-md">
                    {card.badge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                    {card.authority}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-2">
                  <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{card.sla}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-sans group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] group-hover:text-white transition-colors pt-2">
                    <span>View Requirements</span>
                    <Icons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
