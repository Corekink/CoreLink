import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { IMAGES } from '@/data/images';

interface EntityPartner {
  id: string;
  shortName: string;
  nameEn: string;
  nameAr: string;
  type: string;
  icon: any;
  accentColor: string;
  badgeColor: string;
  tag: string;
  badge: string;
  complianceNote: string;
  features: string[];
  keyDetail: string;
  thumbnail: string;
}

interface TrustedPartnersBannerProps {
  onSelectEntity?: (entityName: string) => void;
}

export const TrustedPartnersBanner: React.FC<TrustedPartnersBannerProps> = ({
  onSelectEntity,
}) => {
  const [activePartner, setActivePartner] = useState<EntityPartner | null>(null);

  const partners: EntityPartner[] = [
    {
      id: 'icp',
      shortName: 'ICP UAE',
      nameEn: 'Federal Authority for Identity, Citizenship & Customs',
      nameAr: 'الهيئة الاتحادية للهوية والجنسية',
      type: 'Federal Authority',
      icon: Icons.CreditCard,
      accentColor: 'from-amber-500/20 to-amber-500/5',
      badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      tag: 'Emirates ID & Biometrics',
      badge: 'ICP Smart Portal',
      complianceNote: 'Direct Electronic Emirates ID Biometrics & 10-Year Golden Visa Federal Nomination Gateway.',
      features: ['Smart Emirates ID Card Typing', '10-Year Golden Visa Nomination', 'Entry Permits & Status Change'],
      keyDetail: 'Federal Identity & Smart Biometrics Desk',
      thumbnail: IMAGES.icpGovThumbnail,
    },
    {
      id: 'gdrfa',
      shortName: 'GDRFA Amer',
      nameEn: 'General Directorate of Residency & Foreigners Affairs',
      nameAr: 'الإقامة وشؤون الأجانب - مركز آمر',
      type: 'Immigration & Residency',
      icon: Icons.FileCheck,
      accentColor: 'from-[#D4AF37]/20 to-[#D4AF37]/5',
      badgeColor: 'text-[#D4AF37] border-[#D4AF37]/30 bg-[#D4AF37]/10',
      tag: 'Residency Visa Stamping',
      badge: 'Dubai Amer Official',
      complianceNote: 'Rapid 24-Hour Residency Stamping, Family Sponsorship & Entry Permit Clearance across Dubai.',
      features: ['Amer Fast-Track Typing', 'Family & Dependent Sponsorship', 'Investor 2-Year Residency'],
      keyDetail: 'Official Amer Center Entry & Residence Desk',
      thumbnail: IMAGES.gdrfaGovThumbnail,
    },
    {
      id: 'mohre',
      shortName: 'MOHRE Tasheel',
      nameEn: 'Ministry of Human Resources & Emiratisation',
      nameAr: 'وزارة الموارد البشرية - مركز تسهيل',
      type: 'Labor & Employment',
      icon: Icons.Briefcase,
      accentColor: 'from-blue-500/20 to-blue-500/5',
      badgeColor: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
      tag: 'Tasheel Labour Contracts',
      badge: 'Tasheel System Direct',
      complianceNote: 'Electronic Employment Contracts (Offer Letters), Labor Quotas, Establishment Cards & Work Permits.',
      features: ['New Work Permit Approvals', 'Establishment Card Renewal', 'Labour Quota Modification'],
      keyDetail: 'Authorized Workforce Quotas & Contracts',
      thumbnail: IMAGES.mohreGovThumbnail,
    },
    {
      id: 'det',
      shortName: 'DET Dubai',
      nameEn: 'Department of Economy and Tourism (DED)',
      nameAr: 'دائرة الاقتصاد والسياحة دبي',
      type: 'Commercial Licensing',
      icon: Icons.Building2,
      accentColor: 'from-emerald-500/20 to-emerald-500/5',
      badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      tag: 'Mainland Trade License',
      badge: 'Invest in Dubai',
      complianceNote: 'Instant Commercial Registration, Trade Name Reservation, Initial Approvals & Memorandum of Association.',
      features: ['Mainland LLC Commercial License', 'Trade Name & Activity Approvals', 'MoA Legalization & Ejari'],
      keyDetail: 'Mainland & Free Zone Business Licensing',
      thumbnail: IMAGES.detGovThumbnail,
    },
    {
      id: 'mofa',
      shortName: 'MOFA UAE',
      nameEn: 'Ministry of Foreign Affairs & Consular Attestation',
      nameAr: 'وزارة الخارجية والتعاون الدولي',
      type: 'Consular Attestation',
      icon: Icons.Award,
      accentColor: 'from-cyan-500/20 to-cyan-500/5',
      badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      tag: 'Document Attestation',
      badge: 'MOFA e-Attestation',
      complianceNote: 'Official Degree Attestation, Marriage & Birth Certificates, Apostille Verification & Consular Stamping.',
      features: ['Educational Degree MOFA Stamp', 'Birth & Marriage Certificates', 'Sworn Arabic Legal Translation'],
      keyDetail: 'Official Diplomatic & Degree Attestation',
      thumbnail: IMAGES.mofaGovThumbnail,
    },
    {
      id: 'uaepass',
      shortName: 'UAE PASS',
      nameEn: 'National Digital Identity & Legal Signature',
      nameAr: 'الهوية الرقمية الوطنية المعتمدة',
      type: 'Digital Authentication',
      icon: Icons.ShieldCheck,
      accentColor: 'from-indigo-500/20 to-indigo-500/5',
      badgeColor: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
      tag: 'Digital Signature',
      badge: 'National Gate',
      complianceNote: 'Legally binding digital authentication and end-to-end encrypted electronic document execution.',
      features: ['Digital Identity Verification', 'Legally Binding Signatures', 'Zero-Paper Government Filing'],
      keyDetail: 'Encrypted Digital Signature & Identity',
      thumbnail: IMAGES.uaePassGovThumbnail,
    },
    {
      id: 'dha',
      shortName: 'DHA Salem',
      nameEn: 'Dubai Health Authority - Salem Medical Fitness',
      nameAr: 'هيئة الصحة بدبي - مراكز سالم',
      type: 'Medical Fitness',
      icon: Icons.HeartPulse,
      accentColor: 'from-rose-500/20 to-rose-500/5',
      badgeColor: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
      tag: 'VIP Medical Typing',
      badge: '2-Hour Express',
      complianceNote: 'VIP Blood & X-Ray Medical Fitness Typing for UAE Residence Visas with 2-hour express Salem results.',
      features: ['VIP Salem Medical Scheduling', '2-Hour Fast-Track Results', 'Occupational Health Screening'],
      keyDetail: 'Salem Smart Health Fitness Typing Desk',
      thumbnail: IMAGES.dhaGovThumbnail,
    },
    {
      id: 'dld',
      shortName: 'Ejari (DLD)',
      nameEn: 'Dubai Land Department & Real Estate Trustee',
      nameAr: 'دائرة الأراضي والأملاك - نظام إيجاري',
      type: 'Property & Tenancy',
      icon: Icons.KeyRound,
      accentColor: 'from-purple-500/20 to-purple-500/5',
      badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      tag: 'Ejari & Tenancy',
      badge: 'Instant DLD REST',
      complianceNote: 'Instant Commercial Office & Residential Tenancy Contract Registration for License Issuance & Renewal.',
      features: ['Commercial Office Ejari Issuance', 'Tenancy Contract Attestation', 'Ejari Cancellation Certificate'],
      keyDetail: 'Official Ejari Contract Certification Desk',
      thumbnail: IMAGES.ejariGovThumbnail,
    },
  ];

  return (
    <div className="w-full bg-[#050B14] border-y border-white/10 relative overflow-hidden py-10 sm:py-14">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
              <Icons.CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              OFFICIAL GOVERNMENT SYSTEMS & CLEARANCE DESKS
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-sans text-white">
              Direct UAE Ministry & Authority Integration
            </h3>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Direct Ministry Portals Active
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
              <Icons.Lock className="w-3 h-3 text-[#D4AF37]" />
              Encrypted Filing
            </span>
          </div>
        </div>

        {/* 8-Column Clean Vector Authority Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-3.5">
          {partners.map((partner) => {
            const Icon = partner.icon;
            const isSelected = activePartner?.id === partner.id;

            return (
              <div
                key={partner.id}
                id={`partner-card-${partner.id}`}
                onClick={() => {
                  setActivePartner(isSelected ? null : partner);
                  onSelectEntity?.(partner.nameEn);
                }}
                className={`group relative rounded-2xl border transition-all duration-300 cursor-pointer p-4 flex flex-col justify-between min-h-[170px] sm:min-h-[185px] bg-gradient-to-b ${partner.accentColor} to-[#0A1120] hover:-translate-y-1 ${
                  isSelected
                    ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50 shadow-[0_0_25px_rgba(200,157,75,0.3)] bg-white/10'
                    : 'border-white/10 hover:border-[#D4AF37]/60 hover:bg-white/[0.04]'
                }`}
              >
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between w-full">
                  <div className={`p-2 rounded-xl border ${partner.badgeColor}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-white/50 group-hover:text-[#D4AF37] transition-colors">
                    {partner.badge}
                  </span>
                </div>

                {/* Subtle Compact Service Visual Thumbnail */}
                <div className="relative w-full h-12 rounded-lg overflow-hidden my-2 border border-white/10 bg-black/40">
                  <img
                    src={partner.thumbnail}
                    alt={partner.shortName}
                    className="w-full h-full object-cover opacity-65 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1120]/90 via-transparent to-transparent" />
                </div>

                {/* Card Bottom: Identity & Label */}
                <div className="space-y-0.5">
                  <div className="text-xs sm:text-sm font-black text-white group-hover:text-[#D4AF37] transition-colors leading-tight font-sans">
                    {partner.shortName}
                  </div>
                  <div className="text-[10px] text-slate-300 font-arabic leading-tight font-medium" dir="rtl">
                    {partner.nameAr}
                  </div>
                  <div className="text-[9.5px] text-slate-400 font-mono pt-0.5 truncate">
                    {partner.tag}
                  </div>
                </div>

                {/* Active Indicator */}
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4AF37] rounded-b-2xl" />
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Details Expansion Strip */}
        {activePartner && (
          <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-[#0E1626] via-[#121B2E] to-[#0E1626] border border-[#D4AF37]/50 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5 animate-fadeIn">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shrink-0 hidden sm:block">
                <img
                  src={activePartner.thumbnail}
                  alt={activePartner.shortName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h4 className="text-base sm:text-lg font-bold text-white font-sans">
                    {activePartner.nameEn}
                  </h4>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${activePartner.badgeColor}`}>
                    {activePartner.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                  {activePartner.complianceNote}
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {activePartner.features.map((feat, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-slate-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10 font-medium"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 self-stretch sm:self-auto justify-end shrink-0">
              <button
                onClick={() => onSelectEntity?.(activePartner.nameEn)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] hover:from-[#d5ab58] hover:to-[#e2be4a] text-slate-950 font-bold text-xs shadow-lg transition-all"
              >
                Inquire {activePartner.shortName} Clearance
              </button>
              <button
                onClick={() => setActivePartner(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title="Close"
              >
                <Icons.X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Bottom Trust Indicators Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
          <div className="flex items-center gap-2.5 justify-center md:justify-start">
            <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs text-slate-300 font-medium">Licensed Document Clearing Agency</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center md:justify-start">
            <Icons.Zap className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span className="text-xs text-slate-300 font-medium">24-48h Fast-Track ICP Processing</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center md:justify-start">
            <Icons.Building className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-xs text-slate-300 font-medium">Dubai & Ajman Walk-In Desks</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center md:justify-start">
            <Icons.Shield className="w-4 h-4 text-indigo-400 shrink-0" />
            <span className="text-xs text-slate-300 font-medium">100% Confidentiality & Data Security</span>
          </div>
        </div>

      </div>
    </div>
  );
};

