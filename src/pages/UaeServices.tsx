import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { GovReferences } from '@/components/GovReferences';
import { WhatWeDo } from '@/components/WhatWeDo';
import { PageMeta } from '@/components/PageMeta';

interface LayoutContext {
  onOpenInquiry: (serviceName?: string) => void;
}

const UaeServices: React.FC = () => {
  const { onOpenInquiry } = useOutletContext<LayoutContext>();

  const uaeServicesList = [
    {
      title: 'Emirates ID & Biometrics',
      desc: 'Form typing, biometrics appointment booking, and status tracking.',
      icon: 'IdCard'
    },
    {
      title: 'Golden Visa Facilitation',
      desc: 'Investor, executive, talent, and real estate 10-year residency application packaging.',
      icon: 'Crown'
    },
    {
      title: 'Investor & Partner Visa',
      desc: 'Company partner and shareholder visa processing across mainland and free zones.',
      icon: 'Briefcase'
    },
    {
      title: 'Family & Dependent Visa',
      desc: 'Sponsorship applications for spouse, children, parents, and domestic staff.',
      icon: 'Users'
    },
    {
      title: 'Medical Fitness Typing',
      desc: 'Expedited VIP and normal medical examination typing and certificate tracking.',
      icon: 'Activity'
    },
    {
      title: 'Labor Card & MOHRE Support',
      desc: 'Work permits, quota approvals, offer letters, and labor contract registration.',
      icon: 'FileText'
    }
  ];

  return (
    <div className="bg-[#050B14] text-white">
      <PageMeta
        title="UAE Government Clearance & Typing Services"
        description="Official document clearance with ICP Smart Services, GDRFA Amer, MOHRE Tasheel, Salem medical, and Emirates ID typing."
      />
      {/* Header Banner */}
      <section className="pt-24 pb-12 px-4 text-center border-b border-white/5 bg-gradient-to-b from-[#0B1528] to-[#050B14]">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
            FEDERAL & LOCAL AUTHORITIES
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-sans">
            UAE Government Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Direct typing, document legalisation, and governmental liaison with ICP, GDRFA, MOHRE, and DED.
          </p>
        </div>
      </section>

      {/* Grid of UAE Services */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uaeServicesList.map((svc, i) => (
            <div
              key={i}
              onClick={() => onOpenInquiry(svc.title)}
              className="p-8 rounded-3xl bg-[#0B1528] border border-white/10 hover:border-[#D4AF37] transition-all cursor-pointer group shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors font-mono">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{svc.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{svc.desc}</p>
              <span className="text-xs font-bold text-[#D4AF37] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Request Service →
              </span>
            </div>
          ))}
        </div>
      </section>

      <GovReferences onSelectEntity={(e) => onOpenInquiry(`${e} Support`)} />
      <WhatWeDo currentLang="en" onSelectService={(s) => onOpenInquiry(s)} />
    </div>
  );
};

export default UaeServices;
