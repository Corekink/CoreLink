import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { IMAGES } from '../data/images';
import { BRANDING, getWhatsAppUrl } from '../data/branding';
import {
  VIEWPORT_CONFIG,
  headingLabelVariant,
  headingTitleVariant,
  headingDescVariant,
  BUTTON_HOVER,
  BUTTON_TAP,
} from '@/lib/animations';

interface GovernmentCenter {
  id: string;
  nameEn: string;
  nameAr: string;
  category: 'Amer' | 'Tasheel' | 'Tadbeer' | 'Tawjeeh' | 'DET' | 'Ejari' | 'MOFA' | 'RTA' | 'Salem';
  badge: string;
  authority: string;
  icon: any;
  color: string;
  accentBg: string;
  image: string;
  description: string;
  servicesList: string[];
  sla: string;
  dailyCapacity: string;
  officialPortal: string;
}

interface GovernmentCentersHubProps {
  onSelectService?: (serviceName: string) => void;
}

export const GovernmentCentersHub: React.FC<GovernmentCentersHubProps> = ({ onSelectService }) => {
  const [selectedCenterId, setSelectedCenterId] = useState<string>('amer');
  const shouldReduceMotion = useReducedMotion();

  const centers: GovernmentCenter[] = [
    {
      id: 'amer',
      nameEn: 'Amer Center (GDRFA Dubai)',
      nameAr: 'مركز آمر (الإقامة وشؤون الأجانب)',
      category: 'Amer',
      badge: 'VISA & RESIDENCY HUB',
      authority: 'General Directorate of Residency & Foreigners Affairs',
      icon: Icons.FileCheck,
      color: 'text-amber-400',
      accentBg: 'bg-amber-500/10 border-amber-500/30',
      image: IMAGES.gdrfaResidencyWork,
      description: 'Official GDRFA Amer service desk providing turnkey residency visa issuance, 10-Year Golden Visas, entry permit stamping, family sponsorship, and visa status regularisation.',
      servicesList: [
        '10-Year Golden Visa Nomination & Stamping',
        'Investor & Partner 2-Year Residence Permits',
        'Family & Dependent Sponsorship Clearances',
        'Entry Permit Issuance & Change of Status',
        'Visa Cancellation & Overstay Fine Reductions',
        'Tourist Visa Extensions & Special Permits'
      ],
      sla: '24-48 Hours Express',
      dailyCapacity: '2,500+ Daily Clearances',
      officialPortal: 'GDRFA Smart Portal Direct'
    },
    {
      id: 'tasheel',
      nameEn: 'Tasheel Center (MOHRE)',
      nameAr: 'مركز تسهيل (وزارة الموارد البشرية)',
      category: 'Tasheel',
      badge: 'LABOUR & EMPLOYMENT',
      authority: 'Ministry of Human Resources & Emiratisation',
      icon: Icons.Briefcase,
      color: 'text-blue-400',
      accentBg: 'bg-blue-500/10 border-blue-500/30',
      image: IMAGES.mohreLabourWork,
      description: 'Authorised Tasheel corporate service desk handling workforce approvals, electronic labor contracts, establishment card registration, company quotas, and work permit modifications.',
      servicesList: [
        'New Work Permit & Mission Visa Approvals',
        'Electronic Employment Contract (Offer Letter)',
        'Labour Quota Increase & Category Upgrades',
        'Establishment Card Issuance & Renewal',
        'Absconding Withdrawal & Labour Clearance',
        'Work Permit Cancellation & Fine Settlements'
      ],
      sla: 'Same Day Issuance',
      dailyCapacity: '1,800+ Daily Transactions',
      officialPortal: 'MOHRE e-Services System'
    },
    {
      id: 'tadbeer',
      nameEn: 'Tadbeer Center (Domestic Workers)',
      nameAr: 'مركز تدبير (خدم المنازل)',
      category: 'Tadbeer',
      badge: 'DOMESTIC WORKER VISA',
      authority: 'MOHRE Tadbeer Network',
      icon: Icons.Home,
      color: 'text-emerald-400',
      accentBg: 'bg-emerald-500/10 border-emerald-500/30',
      image: IMAGES.corporateTeam,
      description: 'Full-cycle sponsorship and typing desk for domestic support workers including maids, nannies, private drivers, cooks, and household staff with complete legal contracts.',
      servicesList: [
        'Maid & Nanny Entry Permit & Visa Stamping',
        'Private Chauffeur & Driver Sponsorship',
        'Domestic Worker Labour Contracts (MOHRE)',
        'Medical Fitness & Emirates ID Typing',
        'Contract Renewal & Transfer of Sponsorship',
        'WPS Domestic Payroll Compliance Liaison'
      ],
      sla: '24-72 Hours Turnaround',
      dailyCapacity: '650+ Domestic Cases',
      officialPortal: 'Tadbeer Domestic System'
    },
    {
      id: 'tawjeeh',
      nameEn: 'Tawjeeh Center (Guidance & Awareness)',
      nameAr: 'مركز توجيه (التوعية العمالية)',
      category: 'Tawjeeh',
      badge: 'LABOUR COMPLIANCE',
      authority: 'Ministry of Human Resources & Emiratisation',
      icon: Icons.GraduationCap,
      color: 'text-indigo-400',
      accentBg: 'bg-indigo-500/10 border-indigo-500/30',
      image: IMAGES.legalContractWork,
      description: 'Mandatory worker awareness orientation and labor rights certification desk ensuring employer-employee compliance under UAE Federal Decree Law No. 33 of 2021.',
      servicesList: [
        'Mandatory Worker Orientation Session Booking',
        'Distribution of Work Permits & Labor Cards',
        'Labour Contract Terms Verification & Signing',
        'Wage Protection System (WPS) Rights Advisory',
        'Workplace Dispute Mediation & Grievance Lodgement',
        'Employer-Employee Guidance Certificate Issuance'
      ],
      sla: 'Same Day Delivery',
      dailyCapacity: '900+ Orientations',
      officialPortal: 'Tawjeeh Federal System'
    },
    {
      id: 'det',
      nameEn: 'DET & Economic Development (DED)',
      nameAr: 'دائرة الاقتصاد والسياحة (بلدية دبي)',
      category: 'DET',
      badge: 'BUSINESS LICENSING',
      authority: 'Department of Economy and Tourism Dubai',
      icon: Icons.Building2,
      color: 'text-purple-400',
      accentBg: 'bg-purple-500/10 border-purple-500/30',
      image: IMAGES.detBusinessWork,
      description: 'Mainland licensing hub providing initial approvals, trade name reservations, Memorandum of Association (MoA) drafting, commercial renewals, and commercial register modifications.',
      servicesList: [
        'Instant Mainland Trade License Issuance',
        'Initial Approval & Trade Name Reservation',
        'MoA Drafting & Electronic Legal Signing',
        'Commercial License Annual Renewal Typing',
        'Activity Addition & Partner Change Amendments',
        'Commercial Register Certificate Attestation'
      ],
      sla: '2 - 24 Hours Express',
      dailyCapacity: '1,200+ Corporate Filings',
      officialPortal: 'DET Invest in Dubai Portal'
    },
    {
      id: 'ejari',
      nameEn: 'Ejari & Real Estate Services',
      nameAr: 'إيجاري (دائرة الأراضي والأملاك)',
      category: 'Ejari',
      badge: 'TENANCY & PROPERTY',
      authority: 'Dubai Land Department (DLD)',
      icon: Icons.Key,
      color: 'text-cyan-400',
      accentBg: 'bg-cyan-500/10 border-cyan-500/30',
      image: IMAGES.realEstateDocument,
      description: 'Official tenancy contract registration desk for commercial offices, warehouses, retail shops, and residential premises required for trade licenses and family visa sponsorships.',
      servicesList: [
        'Commercial Ejari Registration for Trade Licenses',
        'Residential Tenancy Contract Attestation (Family Visas)',
        'Ejari Cancellation & Transfer Formalities',
        'DLD Property Ownership Certificate Verification',
        'DEWA Electricity & Water Connection Typing',
        'Virtual Desk & Sustainability Contract Approvals'
      ],
      sla: 'Instant / 1 Hour',
      dailyCapacity: '800+ Ejari Stamped',
      officialPortal: 'Dubai REST / DLD Portal Direct'
    },
    {
      id: 'mofa',
      nameEn: 'MOFA & Embassy Attestation',
      nameAr: 'وزارة الخارجية والتعاون الدولي',
      category: 'MOFA',
      badge: 'LEGAL ATTESTATION',
      authority: 'Ministry of Foreign Affairs and International Cooperation',
      icon: Icons.Stamp,
      color: 'text-rose-400',
      accentBg: 'bg-rose-500/10 border-rose-500/30',
      image: IMAGES.mofaAttestationWork,
      description: 'End-to-end diplomatic document legalization for birth certificates, marriage certificates, educational degrees, powers of attorney, and foreign board resolutions.',
      servicesList: [
        'Degree & Educational Certificate Attestation',
        'Marriage & Birth Certificate Legalization',
        'Commercial Invoices & Board Resolutions',
        'UAE Embassy Stamping in Country of Origin',
        'Ministry of Justice Sworn Legal Translation',
        'MOFA Electronic Stamp & QR Code Verification'
      ],
      sla: '24-48 Hours Express',
      dailyCapacity: '1,400+ Attestations',
      officialPortal: 'MOFA e-Attestation Channel'
    },
    {
      id: 'rta',
      nameEn: 'RTA & Transport Services',
      nameAr: 'هيئة الطرق والمواصلات',
      category: 'RTA',
      badge: 'TRANSPORT & LICENSING',
      authority: 'Roads and Transport Authority Dubai',
      icon: Icons.Car,
      color: 'text-teal-400',
      accentBg: 'bg-teal-500/10 border-teal-500/30',
      image: IMAGES.transportRta,
      description: 'Commercial fleet and personal transport service desk for driver license conversions, commercial vehicle permits, vehicle registration renewals, and RTA corporate licensing approvals.',
      servicesList: [
        'International Driver License Conversion Typing',
        'Commercial Fleet & Vehicle Registration Renewal',
        'RTA Commercial Permit & No Objection (NOC)',
        'Passing Certificate & Inspection Booking',
        'Traffic Fine Verification & Dispute Filing',
        'Parking Card & Salik Corporate Account Setup'
      ],
      sla: 'Instant Clearances',
      dailyCapacity: '500+ Transport Cases',
      officialPortal: 'RTA Dubai Corporate Portal'
    }
  ];

  const activeCenter = centers.find(c => c.id === selectedCenterId) || centers[0];
  const IconComponent = activeCenter.icon;

  return (
    <section id="government-hub" className="bg-[#050B14] py-16 lg:py-24 relative text-white border-t border-white/10 overflow-hidden">
      {/* Subtle micro grid pattern for authoritative feel */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.06)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header with Sequential Stagger */}
        <motion.div
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <motion.div
            variants={headingLabelVariant}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-4 shadow-lg"
          >
            <Icons.Building className="w-3.5 h-3.5 text-[#D4AF37]" />
            ONE-STOP UAE GOVERNMENT TRANSACTIONS CENTER
          </motion.div>

          <motion.h2
            variants={headingTitleVariant}
            className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans leading-[1.15]"
          >
            All Official UAE Government Desks Under One Roof
          </motion.h2>

          <motion.p
            variants={headingDescVariant}
            className="mt-4 text-sm sm:text-base text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Direct ministerial facilitation across Amer, Tasheel, Tadbeer, Tawjeeh, DET, Ejari, MOFA, and RTA with guaranteed turnaround times.
          </motion.p>

          {/* Quick Metrics Bar with depth */}
          <motion.div
            variants={headingDescVariant}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-2"
          >
            <div className="p-4 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 text-center shadow-lg hover:border-[#D4AF37]/40 transition-colors">
              <div className="text-xl sm:text-2xl font-black text-[#D4AF37] font-mono">6,000+</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">Daily Transactions</div>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 text-center shadow-lg hover:border-emerald-500/40 transition-colors">
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">8 Desks</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">Direct Ministries</div>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 text-center shadow-lg hover:border-blue-500/40 transition-colors">
              <div className="text-xl sm:text-2xl font-black text-blue-400 font-mono">100%</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">Federal Compliance</div>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 text-center shadow-lg hover:border-amber-500/40 transition-colors">
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">2h - 24h</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">Express SLA</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Center Tabs Grid with 3D elevation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 mb-10">
          {centers.map((center) => {
            const Icon = center.icon;
            const isSelected = center.id === selectedCenterId;
            return (
              <button
                key={center.id}
                onClick={() => setSelectedCenterId(center.id)}
                className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#15233D] to-[#0A1220] border-[#D4AF37] shadow-[0_10px_25px_rgba(212,175,55,0.25)] -translate-y-1'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/5 hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div className={`p-2 rounded-xl transition-colors ${isSelected ? 'bg-[#D4AF37] text-slate-950' : 'bg-white/5 text-slate-300'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                  )}
                </div>
                <div>
                  <div className={`text-xs font-black font-sans tracking-tight leading-tight ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {center.category}
                  </div>
                  <div className="text-[9.5px] text-slate-400 font-mono mt-0.5 truncate">
                    {center.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Center Interactive Showcase Box with smooth AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCenter.id}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#0E1626] to-[#050B14] p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle watermarked authority logo in background */}
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
              <IconComponent className="w-96 h-96 text-white" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
              
              {/* Left Col: Details & Services Checklist */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Top Tags */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider border ${activeCenter.accentBg} ${activeCenter.color}`}>
                    {activeCenter.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/60 border border-white/15 text-xs font-mono text-slate-300">
                    {activeCenter.authority}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-bold">
                    SLA: {activeCenter.sla}
                  </span>
                </div>

                {/* Title & Arabic */}
                <div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white font-sans tracking-tight">
                    {activeCenter.nameEn}
                  </h3>
                  <div className="text-sm font-medium text-[#D4AF37] font-mono mt-1" dir="rtl">
                    {activeCenter.nameAr}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                  {activeCenter.description}
                </p>

                {/* Verified Services Grid */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-bold">
                    Available Transactions & Filings:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeCenter.servicesList.map((srv, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/50 transition-colors"
                      >
                        <Icons.CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span className="text-xs text-slate-200 font-medium">{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <motion.button
                    onClick={() => onSelectService?.(activeCenter.nameEn)}
                    whileHover={BUTTON_HOVER}
                    whileTap={BUTTON_TAP}
                    className="group relative px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89628] text-slate-950 font-bold text-sm shadow-xl shadow-[#D4AF37]/25 inline-flex items-center gap-2 cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                    <Icons.Send className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Process {activeCenter.category} Transaction</span>
                  </motion.button>

                  <motion.a
                    href={getWhatsAppUrl(activeCenter.nameEn)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={BUTTON_HOVER}
                    whileTap={BUTTON_TAP}
                    className="px-5 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold text-sm transition-all inline-flex items-center gap-2"
                  >
                    <Icons.MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Fast-Track Desk</span>
                  </motion.a>
                </div>

              </div>

              {/* Right Col: Interactive Ministry Operational Dashboard */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl border border-white/15 p-6 bg-gradient-to-br from-[#0B1528] via-[#0D182A] to-[#080D1A] shadow-2xl space-y-5">
                  {/* Header with Department Status */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${activeCenter.accentBg} ${activeCenter.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                          {activeCenter.category} Desk Status
                        </div>
                        <div className="text-sm font-bold text-white">
                          Live Ministry Channel
                        </div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE
                    </span>
                  </div>

                  {/* Turnaround & Capacity Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[10px] text-slate-400 font-mono uppercase">Official SLA</div>
                      <div className="text-sm font-bold text-emerald-400 mt-0.5">{activeCenter.sla}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-[10px] text-slate-400 font-mono uppercase">Daily Filings</div>
                      <div className="text-sm font-bold text-[#D4AF37] mt-0.5">{activeCenter.dailyCapacity}</div>
                    </div>
                  </div>

                  {/* Processing Steps Timeline */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">
                      Standard Verification Lifecycle:
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                        <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center text-[10px] font-bold">1</span>
                        <span className="text-slate-300">Document Upload & Pre-Audit Screening</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                        <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold">2</span>
                        <span className="text-slate-300">Direct {activeCenter.category} System Lodgement</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">3</span>
                        <span className="text-slate-300">Official Electronic Approval & Certificate</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Security Badge */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Icons.ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                      Official Government Channel
                    </span>
                    <span className="font-mono text-[#D4AF37] font-bold">100% Guaranteed</span>
                  </div>
                </div>

                {/* Working Hours Banner */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Icons.Clock className="w-4 h-4 text-[#D4AF37]" />
                    <span>Operating Hours: <strong>7 Days a Week (8:00 AM – 9:00 PM)</strong></span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    OPEN NOW
                  </span>
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default GovernmentCentersHub;
