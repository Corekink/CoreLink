import React from 'react';
import { IMAGES } from '../data/images';

interface BusinessServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const BusinessServices: React.FC<BusinessServicesProps> = ({ onSelectService }) => {
  const businessCards = [
    {
      title: 'Company Formation Assistance',
      image: IMAGES.businessSetup,
      badge: 'Mainland & Freezone',
      description: 'End-to-end LLC incorporation and commercial structuring in Dubai.',
    },
    {
      title: 'Trade License Assistance',
      image: IMAGES.licensing,
      badge: 'DED Commercial',
      description: 'Instant commercial registration, activity approvals & legal agreements.',
    },
    {
      title: 'License Renewal',
      image: IMAGES.licenseRenewal,
      badge: 'Zero-Penalty SLA',
      description: 'Fast 24-hour trade license renewals with Ejari compliance checks.',
    },
    {
      title: 'Business Setup',
      image: IMAGES.businessSetupTurnkey,
      badge: 'Turnkey Packages',
      description: 'Complete corporate infrastructure, bank account liaison & office leasing.',
    },
    {
      title: 'PRO Services',
      image: IMAGES.corporatePRO,
      badge: 'Government Liaison',
      description: 'Dedicated PRO executive managing ministries and municipal clearances.',
    },
    {
      title: 'Document Clearing',
      image: IMAGES.attestation,
      badge: 'Official Notary',
      description: 'Apostille, consular attestation & court notarization desks.',
    },
    {
      title: 'Government Applications',
      image: IMAGES.governmentApplications,
      badge: 'Federal Portals',
      description: 'Direct ICP, GDRFA, MOHRE, and DET digital application processing.',
    },
    {
      title: 'Corporate Documentation',
      image: IMAGES.corporateDocumentation,
      badge: 'Compliance Files',
      description: 'Memorandum of Association, board resolutions & legal power of attorney.',
    },
    {
      title: 'Typing Services',
      image: IMAGES.typing,
      badge: 'VIP Speed Desk',
      description: 'Certified Arabic and English legal typing with instant submission.',
    },
  ];

  return (
    <div id="business-section" className="w-full">
      {/* 1. Dark Hero Banner matching Screenshot 2 */}
      <section className="bg-[#050B14] pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden border-b border-white/5">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-[#D4AF37]/10 blur-3xl pointer-events-none rounded-full" />
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          {/* Eyebrow with gold divider lines */}
          <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
            CORPORATE SERVICES
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Business Services
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Premium corporate administrative services — from company formation and licensing to PRO services and ongoing support.
          </p>
        </div>
      </section>

      {/* 2. Unified Luxury Dark Section with 3x3 9-Card Grid */}
      <section id="business-setup" className="bg-[#0A1120] py-12 lg:py-16 px-4 sm:px-6 lg:px-12 text-white border-t border-white/5 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-3">
              <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
              CORPORATE PRO & FORMATION DESK
              <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans">
              Specialised Corporate Services
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Direct government liaison with DET, GDRFA, MOHRE, and UAE Free Zones for fast-track business setup.
            </p>
          </div>

          {/* 3x3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {businessCards.map((card, idx) => (
              <div
                key={idx}
                onClick={() => onSelectService(card.title)}
                className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(200,157,75,0.25)] transition-all duration-300 cursor-pointer bg-[#0E1626] h-[300px] sm:h-[340px] flex flex-col justify-between p-6 sm:p-7 border border-white/10 hover:border-[#D4AF37]/80 hover:-translate-y-1.5"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/75 to-[#050B14]/30" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#D4AF37] bg-black/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#D4AF37]/40 uppercase shadow-md">
                    {card.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-white/40">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title & Description at bottom */}
                <div className="relative z-10 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight group-hover:text-[#D4AF37] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-2">
                    {card.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#D4AF37] group-hover:text-white transition-colors pt-1">
                    <span>Inquire Now</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
