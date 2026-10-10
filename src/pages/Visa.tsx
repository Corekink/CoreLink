import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { InternationalVisas } from '@/components/InternationalVisas';
import { WhatWeDo } from '@/components/WhatWeDo';
import { PageMeta } from '@/components/PageMeta';

interface LayoutContext {
  onOpenInquiry: (serviceName?: string) => void;
}

const Visa: React.FC = () => {
  const { onOpenInquiry } = useOutletContext<LayoutContext>();

  return (
    <div className="bg-[#050B14] text-white">
      <PageMeta
        title="Visa & Immigration Services"
        description="Comprehensive UAE Golden Visas, residence permits, green visas, family sponsorship, and international travel visa filing."
      />
      {/* Header Banner */}
      <section className="pt-24 pb-12 px-4 text-center border-b border-white/5 bg-gradient-to-b from-[#0B1528] to-[#050B14]">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
            GLOBAL & UAE IMMIGRATION
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-sans">
            Visa & Immigration Assistance
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Professional visa application preparation, document clearing, and appointment booking for UAE and 40+ international destinations.
          </p>
        </div>
      </section>

      <InternationalVisas onSelectCountry={(country) => onOpenInquiry(`${country} Visa Assistance`)} />
      <WhatWeDo currentLang="en" onSelectService={(s) => onOpenInquiry(s)} />
    </div>
  );
};

export default Visa;
