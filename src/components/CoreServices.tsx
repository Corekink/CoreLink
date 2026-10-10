import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { IMAGES } from '../data/images';
import { BRANDING, getWhatsAppUrl } from '../data/branding';
import {
  VIEWPORT_CONFIG,
  headingLabelVariant,
  headingTitleVariant,
  headingDescVariant,
  cardEntrance,
  staggerContainer,
  BUTTON_HOVER,
  BUTTON_TAP,
  CARD_HOVER,
  TiltCard3D,
} from '@/lib/animations';

interface CoreServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const CoreServices: React.FC<CoreServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'visa' | 'pro' | 'business' | 'manpower'>('all');
  const shouldReduceMotion = useReducedMotion();

  const coreServices = [
    {
      id: 'visa-processing',
      category: 'visa',
      title: 'Visa & Residency Processing',
      badge: 'GOVERNMENT CLEARANCE',
      highlight: '99.8% Approval Rate',
      photo: IMAGES.visaProcessing,
      secondaryPhoto: IMAGES.gdrfaGovThumbnail,
      icon: Icons.FileCheck,
      iconBg: 'from-amber-500/20 to-[#D4AF37]/10',
      iconColor: 'text-[#D4AF37]',
      tagline: 'Direct GDRFA, ICP & Embassy Fast-Track Submission',
      description:
        'Comprehensive documentation, biometrics scheduling, and expedited approval for UAE Golden Visas, investor permits, employment visas, family sponsorship, and Schengen/global visas.',
      features: [
        '10-Year Golden Visa (Investors, Real Estate, Talents & Doctors)',
        'Investor & Partner Green Residence Permits (5 Years)',
        'VIP Family, Children & Domestic Help Sponsorship',
        'VIP Medical Fitness Typing & Priority Biometrics Fast-Track',
        'Global Schengen, UK, USA & Canadian Visa Filing Desks',
      ],
      turnaround: '24–48 Hours',
      stats: '18,500+ Visas Cleared',
      ctaText: 'Apply for Visa Clearance',
      linkPath: '/visa',
      serviceQuery: 'UAE & International Visa Processing',
    },
    {
      id: 'pro-services',
      category: 'pro',
      title: 'Corporate PRO & Government Liaison',
      badge: 'OFFICIAL REPRESENTATION',
      highlight: 'Direct Ministry Channel',
      photo: IMAGES.corporatePRO,
      secondaryPhoto: IMAGES.attestation,
      icon: Icons.ShieldCheck,
      iconBg: 'from-blue-500/20 to-indigo-500/10',
      iconColor: 'text-blue-400',
      tagline: 'End-to-End Clearance with MOHRE, MOFA, DED & Federal Courts',
      description:
        'Official representation and document clearance across all UAE government departments. We manage legal translations, embassy attestations, corporate renewals, and compliance.',
      features: [
        'MOHRE Quota Approvals, Electronic Work Permits & Labor Cards',
        'Ministry of Foreign Affairs (MOFA) & Embassy Attestation',
        'Legal Arabic/English Translation & Notary Public Documentation',
        'Immigration Fine Reductions & Status Amendment Clearances',
        'Dedicated Enterprise Corporate PRO Retainers & SLA Support',
      ],
      turnaround: 'Same Day / 24h',
      stats: '450+ Corporate Retainers',
      ctaText: 'Book Corporate PRO Service',
      linkPath: '/uae-services',
      serviceQuery: 'Corporate PRO & Government Liaison',
    },
    {
      id: 'business-setup',
      category: 'business',
      title: 'Business Setup & Trade Licensing',
      badge: 'TURNKEY INCORPORATION',
      highlight: '100% Foreign Ownership',
      photo: IMAGES.businessSetup,
      secondaryPhoto: IMAGES.licensing,
      icon: Icons.Building2,
      iconBg: 'from-emerald-500/20 to-teal-500/10',
      iconColor: 'text-emerald-400',
      tagline: 'Mainland DED, Free Zones & Offshore Company Registration',
      description:
        'Instant issuance of commercial, industrial, professional, and e-commerce trade licenses across Dubai DET Mainland and over 40+ leading UAE Free Zone jurisdictions.',
      features: [
        'Instant Mainland (DET) & Free Zone (IFZA, DMCC, Meydan, RAKEZ) Formation',
        'Drafting of Memorandum of Association (MoA) & Corporate Resolutions',
        'Guaranteed UAE Corporate Bank Account Opening Advisory',
        'Ejari Commercial Office Space & Virtual Desk Setup',
        'Trade License Amendments, Name Approvals & Activity Additions',
      ],
      turnaround: 'Instant / 1-2 Days',
      stats: '1,250+ Companies Launched',
      ctaText: 'Launch Your Business',
      linkPath: '/business-services',
      serviceQuery: 'UAE Company Formation & Business Setup',
    },
    {
      id: 'manpower-solutions',
      category: 'manpower',
      title: 'Manpower Supply & Group Quotas',
      badge: 'LARGE SCALE MOBILISATION',
      highlight: 'Direct Workforce Pipeline',
      photo: IMAGES.manpower,
      secondaryPhoto: IMAGES.manpowerSiteEngineers,
      icon: Icons.Users,
      iconBg: 'from-purple-500/20 to-violet-500/10',
      iconColor: 'text-purple-400',
      tagline: 'Bulk MOHRE Labor Quota Allocation & Deployment',
      description:
        'Complete workforce management for contracting, logistics, hospitality, and engineering enterprises. Group visa clearance, medical screening, and regulatory onboarding.',
      features: [
        'Bulk MOHRE Electronic Labor Quota Approvals & Submissions',
        'Skilled & Unskilled Manpower Mobilization from 15+ Countries',
        'Group Medical Fitness Screening & Express Biometrics Escort',
        'Wages Protection System (WPS) Setup & Salary Card Dispatch',
        'Compliance Audits for Labor Accommodations & Safety Protocol',
      ],
      turnaround: 'Bulk Batch Expedited',
      stats: '25,000+ Workers Deployed',
      ctaText: 'Request Manpower Quota',
      linkPath: '/manpower',
      serviceQuery: 'Manpower Supply & Labor Quotas',
    },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? coreServices
      : coreServices.filter((s) => s.category === activeCategory);

  return (
    <section id="core-services-section" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#050B14] relative overflow-hidden text-white border-t border-white/10">
      {/* Dynamic Background Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Header with Sequential Stagger */}
        <motion.div
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.14 } },
          }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          {/* Label: y: 20 -> 0 */}
          <motion.div
            variants={headingLabelVariant}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-bold tracking-[0.2em] uppercase shadow-lg shadow-[#D4AF37]/10"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span>PRIMARY SERVICE PILLARS</span>
          </motion.div>

          {/* Heading: y: 35 -> 0 */}
          <motion.h2
            variants={headingTitleVariant}
            className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-white leading-tight"
          >
            Comprehensive <span className="text-[#D4AF37]">Corporate & Visa</span> Capabilities
          </motion.h2>

          {/* Paragraph: y: 25 -> 0 */}
          <motion.p
            variants={headingDescVariant}
            className="text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            Delivering certified government clearances, company setup, and workforce mobilization with direct ministry integration across Dubai and the UAE.
          </motion.p>

          {/* Interactive Category Filter Tabs */}
          <motion.div
            variants={headingDescVariant}
            className="flex flex-wrap items-center justify-center gap-2 pt-2"
          >
            {[
              { id: 'all', label: 'All 4 Pillars' },
              { id: 'visa', label: 'Visa & Residency' },
              { id: 'pro', label: 'Corporate PRO' },
              { id: 'business', label: 'Business Setup' },
              { id: 'manpower', label: 'Manpower Quotas' },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id as any)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#b58b3c] text-slate-950 shadow-lg shadow-[#D4AF37]/25'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* 4-Card Grid with Strong Stagger (opacity 0 -> 1, y: 50 -> 0, scale: 0.96 -> 1) */}
        <motion.div
          key={activeCategory}
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          variants={staggerContainer(0.12, 0.05)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardEntrance}
                className="h-full"
              >
                <TiltCard3D maxTilt={4.5} containerClassName="h-full" className="h-full">
                  <div
                    id={`card-${service.id}`}
                    className="group relative h-full rounded-3xl bg-gradient-to-b from-[#0E1626] to-[#080D18] border border-white/10 hover:border-[#D4AF37] flex flex-col justify-between transition-colors duration-300 shadow-2xl hover:shadow-[0_20px_45px_rgba(212,175,55,0.22)] cursor-pointer overflow-hidden"
                    onClick={() => onSelectService(service.serviceQuery)}
                  >
                    {/* Top Accent Gradient Border Glow */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                    {/* Card Top: HIGH-IMPACT PHOTO HEADER with Image Scale 1 -> 1.06 */}
                    <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                      <img
                        src={service.photo}
                        alt={service.title}
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={350}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                      />
                      {/* Photo Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1626] via-[#0E1626]/40 to-transparent" />
                      
                      {/* Top Floating Badge & Live Indicator */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                        <span className="text-[10px] font-mono font-bold tracking-wider text-slate-950 bg-[#D4AF37] px-2.5 py-1 rounded-full uppercase shadow-md">
                          {service.badge}
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-300 bg-[#050B14]/80 backdrop-blur-md border border-emerald-500/40 px-2.5 py-1 rounded-full flex items-center gap-1 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {service.highlight}
                        </span>
                      </div>

                      {/* Floating Icon Over Photo with scale 1.12 + rotate on hover */}
                      <div className="absolute bottom-3 left-4 z-10 flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.iconBg} border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-lg group-hover:scale-112 group-hover:rotate-3 group-hover:border-[#D4AF37] transition-all duration-300`}>
                          <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                        </div>
                        <div className="text-[11px] font-mono text-amber-200 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10">
                          ⚡ {service.turnaround}
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold font-sans text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                          {service.title}
                        </h3>
                        
                        <p className="text-[11px] text-[#D4AF37] font-mono mt-1 font-semibold">
                          {service.tagline}
                        </p>

                        <p className="text-slate-300 text-xs leading-relaxed mt-3 mb-5 line-clamp-3">
                          {service.description}
                        </p>

                        {/* Features Checklist */}
                        <div className="space-y-2 pt-3 border-t border-white/10 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                              <Icons.CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                              <span className="leading-tight">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Bottom Stats & Action Trigger */}
                      <div className="pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-3">
                          <span>Verified Record:</span>
                          <span className="text-emerald-400 font-bold">{service.stats}</span>
                        </div>

                        <div className="flex items-center justify-between gap-2">
                          <motion.button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectService(service.serviceQuery);
                            }}
                            whileHover={BUTTON_HOVER}
                            whileTap={BUTTON_TAP}
                            className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#b58b3c] text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:shadow-lg hover:shadow-[#D4AF37]/30"
                          >
                            <span>{service.ctaText}</span>
                            <Icons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                          </motion.button>

                          <Link
                            to={service.linkPath}
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105 active:scale-95 shrink-0"
                            title={`Explore details for ${service.title}`}
                          >
                            <Icons.ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                          </Link>

                          <a
                            href={getWhatsAppUrl(service.category)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400 flex items-center justify-center text-emerald-400 transition-all hover:scale-105 active:scale-95 shrink-0"
                            title="Instant WhatsApp Support"
                          >
                            <Icons.MessageSquare className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard3D>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Fast-Contact Banner with Lift & Hover */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="mt-14 rounded-3xl bg-gradient-to-r from-[#0C1527] via-[#101B30] to-[#0A1120] border border-[#D4AF37]/30 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Icons.Headphones className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-sans">
                Need a Custom Government Clearance or Retainer?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Our senior legal PROs represent companies before Dubai Courts, MOHRE, and Free Zone authorities daily.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <motion.button
              onClick={() => onSelectService('Dedicated Corporate PRO Retainer Inquiry')}
              whileHover={BUTTON_HOVER}
              whileTap={BUTTON_TAP}
              className="flex-1 lg:flex-initial px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#b58b3c] text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Speak with Senior PRO</span>
              <Icons.ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.a
              href={BRANDING.telUrl}
              whileHover={BUTTON_HOVER}
              whileTap={BUTTON_TAP}
              className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs flex items-center gap-2 transition-colors shrink-0"
            >
              <Icons.PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              <span className="hidden sm:inline">{BRANDING.mobileFormatted}</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CoreServices;
