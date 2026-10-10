import React from 'react';
import * as Icons from 'lucide-react';
import { LanguageCode } from '../types';

interface GovLogosBarProps {
  currentLang: LanguageCode;
  onSelectDesk: (deskName: string) => void;
}

interface GovDesk {
  id: string;
  nameEn: string;
  nameAr: string;
  emirate: string;
  badge: string;
  icon: React.ReactNode;
  shortDesc: string;
  color: string;
}

export const GovLogosBar: React.FC<GovLogosBarProps> = ({ currentLang, onSelectDesk }) => {
  const desks: GovDesk[] = [
    {
      id: 'dubai-gov',
      nameEn: 'Government of Dubai',
      nameAr: 'حكومة دبي',
      emirate: 'Dubai',
      badge: 'Mainland Desk',
      icon: <Icons.Landmark className="w-8 h-8 text-[#D4AF37]" />,
      shortDesc: 'Direct Dubai DED and Executive Council corporate liaison desk.',
      color: 'from-[#071A2E] via-[#0D253F] to-[#071A2E]'
    },
    {
      id: 'ajman-gov',
      nameEn: 'Government of Ajman',
      nameAr: 'حكومة عجمان',
      emirate: 'Ajman',
      badge: 'Emiri Clearance',
      icon: <Icons.Shield className="w-8 h-8 text-emerald-400" />,
      shortDesc: 'Authorized Ajman Freezone and Municipality documentation typing center.',
      color: 'from-[#061F16] via-[#0D3627] to-[#061F16]'
    },
    {
      id: 'sharjah-gov',
      nameEn: 'Government of Sharjah',
      nameAr: 'حكومة الشارقة',
      emirate: 'Sharjah',
      badge: 'SEDD Liaison',
      icon: <Icons.Building2 className="w-8 h-8 text-sky-400" />,
      shortDesc: 'Official Sharjah Economic Development and Chamber of Commerce clearance.',
      color: 'from-[#071A2E] via-[#133252] to-[#071A2E]'
    },
    {
      id: 'amer-dubai',
      nameEn: 'Amer Typing Center',
      nameAr: 'آمر لخدمات المتعاملين',
      emirate: 'Dubai GDRFA',
      badge: 'VIP Authorized',
      icon: <Icons.Stamp className="w-8 h-8 text-[#D4AF37]" />,
      shortDesc: 'Instant electronic residency visa issuance and entry permit modifications.',
      color: 'from-[#1A1207] via-[#2D200E] to-[#1A1207]'
    },
    {
      id: 'tasheel-uae',
      nameEn: 'Tasheel Center',
      nameAr: 'مركز تسهيل',
      emirate: 'Federal MOHRE',
      badge: 'Labour Portal',
      icon: <Icons.FileText className="w-8 h-8 text-emerald-400" />,
      shortDesc: 'Authorized work permit typing, quota submissions, and wage contracts.',
      color: 'from-[#061F16] via-[#0E3A29] to-[#061F16]'
    },
    {
      id: 'tawjeeh-uae',
      nameEn: 'Tawjeeh Desk',
      nameAr: 'مركز توجيه',
      emirate: 'Federal MOHRE',
      badge: 'Law Orientation',
      icon: <Icons.BookOpen className="w-8 h-8 text-amber-400" />,
      shortDesc: 'Mandatory UAE employee orientation and labour compliance certification.',
      color: 'from-[#1A1607] via-[#332A0C] to-[#1A1607]'
    },
    {
      id: 'icp-federal',
      nameEn: 'Federal ICP',
      nameAr: 'الهيئة الاتحادية للهوية',
      emirate: 'UAE Federal',
      badge: 'Golden & ID',
      icon: <Icons.CreditCard className="w-8 h-8 text-blue-400" />,
      shortDesc: 'Federal Emirates ID biometric typing and 10-year Golden Visa approvals.',
      color: 'from-[#07152E] via-[#102752] to-[#07152E]'
    },
    {
      id: 'dubai-police',
      nameEn: 'Dubai Police HQ',
      nameAr: 'شرطة دبي',
      emirate: 'Dubai HQ',
      badge: 'Security Desk',
      icon: <Icons.BadgeAlert className="w-8 h-8 text-[#D4AF37]" />,
      shortDesc: 'Official Police Clearance Certificates (PCC) and executive good conduct liaison.',
      color: 'from-[#071A2E] via-[#0F2947] to-[#071A2E]'
    },
    {
      id: 'rta-dubai',
      nameEn: 'RTA Dubai',
      nameAr: 'هيئة الطرق والمواصلات',
      emirate: 'Dubai RTA',
      badge: 'Transport Desk',
      icon: <Icons.Car className="w-8 h-8 text-red-400" />,
      shortDesc: 'Swift corporate vehicle fleet registration and commercial driving licensing.',
      color: 'from-[#1F0707] via-[#380E0E] to-[#1F0707]'
    },
    {
      id: 'dha-salem',
      nameEn: 'DHA & Salem Medical',
      nameAr: 'صحة دبي وسالم',
      emirate: 'VIP Medical',
      badge: '2-Hour VIP',
      icon: <Icons.Activity className="w-8 h-8 text-emerald-400" />,
      shortDesc: 'VIP medical fitness typing center with rapid 2-hour government results.',
      color: 'from-[#061F16] via-[#0B3324] to-[#061F16]'
    },
    {
      id: 'dubai-courts',
      nameEn: 'Dubai Courts Notary',
      nameAr: 'محاكم دبي والكاتب العدل',
      emirate: 'Dubai MOJ',
      badge: 'Legal Attest',
      icon: <Icons.Gavel className="w-8 h-8 text-[#D4AF37]" />,
      shortDesc: 'Official notary public power of attorney typing and contract attestation.',
      color: 'from-[#1A1207] via-[#2A1D0B] to-[#1A1207]'
    },
    {
      id: 'mofa-attest',
      nameEn: 'MOFA Attestation',
      nameAr: 'وزارة الخارجية',
      emirate: 'Federal MOFA',
      badge: 'Global Stamps',
      icon: <Icons.CheckCircle2 className="w-8 h-8 text-sky-400" />,
      shortDesc: 'Ministry of Foreign Affairs document stamping and international embassy liaison.',
      color: 'from-[#071A2E] via-[#0C2440] to-[#071A2E]'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#05070B] border-b border-[#D4AF37]/30 relative overflow-hidden">
      
      {/* Background Ambient Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#071A2E]/60 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-950/40 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title (Short & Punchy) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071A2E] border border-[#D4AF37]/50 shadow-xl mb-4">
            <Icons.ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
              OFFICIAL GOVERNMENT TYPING DESKS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Authorized UAE Government & Emirates Liaison
          </h2>
          <p className="text-sm text-slate-300 font-light mt-2 max-w-xl mx-auto">
            Direct VIP electronic connection to Dubai, Ajman, Sharjah, and Federal immigration gateways.
          </p>
        </div>

        {/* 12 Luxury Crest Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {desks.map((desk) => (
            <div
              key={desk.id}
              onClick={() => onSelectDesk(desk.nameEn)}
              className={`group relative p-6 rounded-3xl bg-gradient-to-br ${desk.color} border border-slate-800 hover:border-[#D4AF37] shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/15 transition-all duration-500 cursor-pointer hover:-translate-y-2 flex flex-col justify-between overflow-hidden`}
            >
              {/* Glass Reflection Glint */}
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all"></div>

              {/* Top Row: Crest & Badge */}
              <div className="flex items-start justify-between gap-3 mb-6 relative z-10">
                <div className="p-3 rounded-2xl bg-[#05070B]/90 border border-[#D4AF37]/40 shadow-lg group-hover:scale-110 group-hover:border-white transition-all duration-300">
                  {desk.icon}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-black/60 text-[#D4AF37] border border-[#D4AF37]/30 font-bold uppercase tracking-wider mb-1">
                    {desk.emirate}
                  </span>
                  <span className="text-[9px] font-mono text-emerald-400 font-semibold uppercase">
                    ● {desk.badge}
                  </span>
                </div>
              </div>

              {/* Middle Row: Names */}
              <div className="relative z-10 space-y-1">
                <span className="text-xs font-mono text-slate-400 tracking-widest block font-arabic block text-right font-bold text-[#D4AF37]/80">
                  {desk.nameAr}
                </span>
                <h3 className="text-lg font-black text-white tracking-tight group-hover:text-[#D4AF37] transition-colors">
                  {desk.nameEn}
                </h3>
              </div>

              {/* Bottom Row: One Short Sentence Only */}
              <div className="mt-4 pt-4 border-t border-white/10 relative z-10 flex items-center justify-between gap-2">
                <p className="text-[11px] text-slate-300 font-light leading-relaxed line-clamp-2">
                  {desk.shortDesc}
                </p>
                <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#D4AF37] group-hover:text-black text-white flex items-center justify-center shrink-0 transition-colors">
                  <Icons.ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Gold Glint Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#D4AF37]/40 rounded-3xl pointer-events-none transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Bottom Verification Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#071A2E]/80 border border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shrink-0">
              <Icons.FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase font-mono">100% Government Gateway Verified</h4>
              <p className="text-xs text-slate-300">All typing submissions are routed via official smart government biometric and typing channels.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectDesk('Express Government Clearance')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#1E2E4A] text-black font-black text-xs uppercase tracking-wider hover:scale-105 transition-transform shrink-0 shadow-lg shadow-[#D4AF37]/20"
          >
            Start Typing Express
          </button>
        </div>

      </div>
    </section>
  );
};
