import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { IMAGES } from '../data/images';
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
} from '@/lib/animations';

interface CompanyProfileShowcaseProps {
  onOpenInquiry?: (serviceName?: string) => void;
}

export const CompanyProfileShowcase: React.FC<CompanyProfileShowcaseProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'visas' | 'corporate' | 'manpower' | 'government'>('all');
  const [selectedCase, setSelectedCase] = useState<any | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const portfolioProjects = [
    {
      id: 'golden-visa-case',
      category: 'visas',
      title: '10-Year Federal UAE Golden Visa Portfolio',
      subtitle: 'Real Estate Investors, High Net Worth & Tech Executives',
      badge: 'ICP & GDRFA APPROVED',
      turnaround: '48 Hours Expedited',
      successRate: '100% Cleared',
      photo: IMAGES.uaePassportDesk,
      secondaryImage: IMAGES.gdrfaResidencyWork,
      stats: '1,420+ Golden Visas Issued',
      description:
        'Complete end-to-end dossier preparation including real estate title deed verification, bank solvency validation, ICP federal nomination, and VIP medical biometrics fast-tracking.',
      highlights: [
        'Zero Sponsor Required · 100% Foreign Security',
        'Direct ICP Smart Channels File Submission',
        'Full Family & Dependent Sponsorship Included',
        'Doorstep Emirates ID Physical Card Delivery',
      ],
      clientType: 'Global Investors & Executive Directors',
      verifiedDate: 'Active Daily Dispatch',
    },
    {
      id: 'business-setup-case',
      category: 'corporate',
      title: 'Mainland DED & Freezone Turnkey Corporate Formation',
      subtitle: 'Commercial, Industrial & E-Commerce Licensing',
      badge: 'DET DUBAI CERTIFIED',
      turnaround: 'Same Day Issuance',
      successRate: 'Guaranteed Approval',
      photo: IMAGES.companyFormation,
      secondaryImage: IMAGES.detBusinessWork,
      stats: '1,250+ Trade Licenses Registered',
      description:
        'Instant issuance of Dubai Mainland DET commercial licenses, drafting of Memorandum of Association (MoA), corporate bank account opening advisory, and Ejari commercial lease setup.',
      highlights: [
        '100% Expatriate Foreign Ownership',
        'Mainland & 40+ UAE Free Zones (IFZA, DMCC, Meydan, RAKEZ)',
        'Corporate Bank Account Compliance Fast-Track',
        'Instant Initial Approval & Trade Name Certificate',
      ],
      clientType: 'International Enterprises & Serial Entrepreneurs',
      verifiedDate: 'Tier-1 Certified',
    },
    {
      id: 'manpower-workforce-case',
      category: 'manpower',
      title: 'Manpower & Large Scale Workforce Mobilisation',
      subtitle: 'Construction, Infrastructure, Engineering & Hospitality',
      badge: 'MOHRE QUOTA COMPLIANT',
      turnaround: 'Bulk Batch Filing',
      successRate: '99.9% Quota Cleared',
      photo: IMAGES.manpowerWorkforce,
      secondaryImage: IMAGES.mohreLabourWork,
      stats: '25,000+ Workers Deployed',
      description:
        'Bulk electronic labor quota approvals, group visa clearance, occupational health medical testing, and WPS payroll onboarding for major contracting and industrial firms.',
      highlights: [
        'MOHRE Electronic Work Permit & Offer Letter Batches',
        'Group Airport Arrival & Fast-Track Stamping Protocol',
        'Wages Protection System (WPS) Compliance Setup',
        'Labor Accommodation & Transportation Regulatory Clearances',
      ],
      clientType: 'Tier-1 Construction & Contracting Corporations',
      verifiedDate: 'Ministry Authorised',
    },
    {
      id: 'court-attestation-case',
      category: 'government',
      title: 'Sworn Judicial MOFA & Embassy Document Legalization',
      subtitle: 'Corporate Articles, Power of Attorney & Commercial Contracts',
      badge: 'MOFA NOTARY COMPLIANT',
      turnaround: 'Same-Day Clearance',
      successRate: 'Guaranteed Stamped',
      photo: IMAGES.notaryContractWork,
      secondaryImage: IMAGES.tradeLicense,
      stats: '18,500+ Contracts Attested',
      description:
        'Ministry of Foreign Affairs (MOFA) verified apostille, sworn Arabic legal translation, Dubai Courts notary public legalization, and consular chamber stamp authentication.',
      highlights: [
        'Ministry of Justice Certified Sworn Translators',
        'Embassy Legalization for 85+ Sovereign Jurisdictions',
        'Direct Dubai Courts Electronic Notary Verification',
        'Express Door-to-Door Document Courier Transit',
      ],
      clientType: 'Multinationals, Law Chambers & Joint Ventures',
      verifiedDate: 'ISO 9001 Protocol',
    },
    {
      id: 'salem-medical-case',
      category: 'visas',
      title: 'VIP Salem Medical Fitness & Smart Biometrics',
      subtitle: 'DHA 2-Hour Express Clearance & Emirates ID Lounge',
      badge: 'DHA SALEM PARTNER',
      turnaround: '2 Hours Express',
      successRate: 'Zero Wait Time',
      photo: IMAGES.dhaMedicalFitnessWork,
      secondaryImage: IMAGES.emiratesIdTypingDesk,
      stats: '12,800+ VIP Screenings',
      description:
        'Priority booking at premier DHA Smart Salem centers with private luxury lounge access, blood test and X-ray rapid results within 2 hours, and express biometric capture.',
      highlights: [
        'Private VIP Lounge & Refreshments',
        'DHA Digital Fitness Certificate in 2 Hours',
        'Priority Fingerprint Biometrics Appointments',
        'Seamless Integration with ICP Residency Stamping',
      ],
      clientType: 'VIP Executives, Diplomats & Families',
      verifiedDate: 'Priority Access',
    },
    {
      id: 'schengen-global-case',
      category: 'visas',
      title: 'Global Schengen & International Embassy Visa Filing',
      subtitle: 'France, Germany, Italy, Switzerland, UK & USA',
      badge: 'GLOBAL EMBASSY DESK',
      turnaround: 'Express VFS Slots',
      successRate: '98.7% Success Rate',
      photo: IMAGES.parisEiffel,
      secondaryImage: IMAGES.schengenCollage,
      stats: '8,900+ Travel Visas Approved',
      description:
        'Full application preparation, verified flight and luxury hotel itineraries, insurance underwriting, and priority biometric appointment slots at VFS Global and TLScontact.',
      highlights: [
        'Guaranteed Appointment Slot Retrieval',
        'Dossier Optimization & Financial Proof Structuring',
        'Official Schengen-Compliant Travel Medical Insurance',
        'Business Delegation & Tourist Visa Protocols',
      ],
      clientType: 'Frequent Travelers & Corporate Executives',
      verifiedDate: 'Global Accreditation',
    },
  ];

  const filteredProjects =
    activeTab === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeTab);

  return (
    <section id="company-profile-showcase" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#050B14] relative overflow-hidden text-white border-t border-white/10">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header with Sequential Stagger (Label -> Heading -> Description) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 pb-6 border-b border-white/10">
          <motion.div
            initial={shouldReduceMotion ? {} : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT_CONFIG}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="max-w-3xl space-y-4"
          >
            <motion.div
              variants={headingLabelVariant}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold tracking-[0.2em] uppercase"
            >
              <Icons.ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>CORE LINK OFFICIAL COMPANY PROFILE & REAL WORK</span>
            </motion.div>

            <motion.h2
              variants={headingTitleVariant}
              className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-white leading-tight"
            >
              Real Work. Real Approvals. <br />
              <span className="text-[#D4AF37]">
                UAE Government Case Portfolio
              </span>
            </motion.h2>

            <motion.p
              variants={headingDescVariant}
              className="text-slate-300 text-sm sm:text-base leading-relaxed"
            >
              Explore our proven track record in expediting high-profile residency visas, mainland & freezone company formations, large-scale manpower mobilisations, and judicial PRO clearing.
            </motion.p>
          </motion.div>

          {/* Interactive Filter Pills */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2"
          >
            {[
              { id: 'all', label: 'All Portfolio Cases' },
              { id: 'visas', label: 'Visas & Residency' },
              { id: 'corporate', label: 'Business Setup' },
              { id: 'manpower', label: 'Manpower / Site Team' },
              { id: 'government', label: 'PRO & Attestations' },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold font-sans transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#b58b3c] text-slate-950 font-black shadow-lg shadow-[#D4AF37]/30'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Bento Grid with Strong Stagger (opacity 0 -> 1, y: 50 -> 0, scale: 0.96 -> 1) */}
        <motion.div
          key={activeTab}
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          variants={staggerContainer(0.12, 0.05)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardEntrance}
              whileHover={CARD_HOVER}
              className="group relative rounded-3xl bg-gradient-to-b from-[#0D1525] via-[#091222] to-[#050B14] border border-white/15 hover:border-[#D4AF37]/80 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCase(project)}
            >
              {/* Top Gold Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

              {/* CARD TOP: REAL WORK PHOTO WITH SCALE */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.photo}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  width={700}
                  height={400}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                />
                
                {/* Photo Overlays & Shadows */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1525] via-[#0D1525]/40 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-[#D4AF37]/50 text-[#D4AF37] text-[10px] font-mono font-bold uppercase tracking-wider">
                    {project.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-[10px] font-mono font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {project.turnaround}
                  </span>
                </div>

                {/* Bottom Floating Stats Strip on Photo */}
                <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between">
                  <div className="px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs font-bold flex items-center gap-2">
                    <Icons.CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{project.stats}</span>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-[#D4AF37] text-slate-950 flex items-center justify-center shadow-lg group-hover:rotate-45 transition-transform duration-300">
                    <Icons.ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* CARD BODY: PROVEN DELIVERABLES */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-sans text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-[#D4AF37] font-mono font-semibold mt-1">
                    {project.subtitle}
                  </p>

                  <p className="text-slate-300 text-xs leading-relaxed mt-3 mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Checklist */}
                  <div className="space-y-2 pt-3 border-t border-white/10 mb-6">
                    {project.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <Icons.Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BOTTOM ACTION BAR */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="text-[11px] font-mono text-slate-400">
                    <span className="block text-[9px] uppercase tracking-wider text-slate-500">Verified Protocol</span>
                    <span className="text-emerald-400 font-bold">{project.verifiedDate}</span>
                  </div>

                  <motion.button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenInquiry?.(project.title);
                    }}
                    whileHover={BUTTON_HOVER}
                    whileTap={BUTTON_TAP}
                    className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#b58b3c] text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Initiate Dossier</span>
                    <Icons.ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* MODAL / CASE DETAILS POPUP WITH FLUID ANIMATION */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl rounded-3xl bg-[#0C1424] border border-[#D4AF37]/50 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto text-white"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
                >
                  <Icons.X className="w-5 h-5" />
                </button>

                <div className="relative z-10 space-y-6">
                  {/* Modal Header */}
                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-mono font-bold uppercase">
                      {selectedCase.badge} · {selectedCase.turnaround}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                      {selectedCase.title}
                    </h3>
                    <p className="text-sm text-[#D4AF37] font-mono mt-1">
                      {selectedCase.subtitle}
                    </p>
                  </div>

                  {/* Double Image Preview */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl overflow-hidden border border-white/10">
                    <div className="h-52 relative">
                      <img
                        src={selectedCase.photo}
                        alt={selectedCase.title}
                        loading="lazy"
                        decoding="async"
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/70 text-[10px] font-mono text-white">
                        Field Execution Photo
                      </div>
                    </div>
                    <div className="h-52 relative">
                      <img
                        src={selectedCase.secondaryImage}
                        alt="Verification process"
                        loading="lazy"
                        decoding="async"
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/70 text-[10px] font-mono text-emerald-400">
                        Ministry Approved Stamped Dossier
                      </div>
                    </div>
                  </div>

                  {/* Description & All Highlights */}
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 font-mono">
                      Case Scope & Clearance Protocol
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {selectedCase.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedCase.highlights.map((h: string, idx: number) => (
                        <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-2.5 text-xs text-slate-200">
                          <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Modal Footer Call-to-action */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs font-mono text-slate-400">
                      Target Turnaround: <span className="text-white font-bold">{selectedCase.turnaround}</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <motion.button
                        type="button"
                        onClick={() => {
                          const query = selectedCase.title;
                          setSelectedCase(null);
                          onOpenInquiry?.(query);
                        }}
                        whileHover={BUTTON_HOVER}
                        whileTap={BUTTON_TAP}
                        className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#b58b3c] text-slate-950 font-bold text-xs shadow-lg cursor-pointer"
                      >
                        Fast-Track This Clearance
                      </motion.button>
                      <button
                        type="button"
                        onClick={() => setSelectedCase(null)}
                        className="px-4 py-3 rounded-xl bg-white/10 text-white font-semibold text-xs hover:bg-white/20 transition-all cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default CompanyProfileShowcase;
