import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { PortfolioBento } from '@/components/PortfolioBento';
import { ExploreServicesVisual } from '@/components/ExploreServicesVisual';
import { ServiceProcess } from '@/components/ServiceProcess';
import { PageMeta } from '@/components/PageMeta';

interface LayoutContext {
  onOpenInquiry: (serviceName?: string) => void;
}

const Services: React.FC = () => {
  const { onOpenInquiry } = useOutletContext<LayoutContext>();

  return (
    <div className="bg-[#050B14] text-white">
      <PageMeta
        title="All Services Directory"
        description="Explore the complete directory of CORE LINK administrative services: Golden Visas, corporate PRO, Mainland & Freezone business setups, and embassy clearances."
      />
      {/* Header Banner */}
      <section className="pt-24 pb-12 px-4 text-center border-b border-white/5 bg-gradient-to-b from-[#0B1528] to-[#050B14]">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
            COMPREHENSIVE CATALOG
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-sans">
            Our Complete Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Full-spectrum administrative facilitation covering UAE residency, international visas, manpower, and business setups.
          </p>
        </div>
      </section>

      <PortfolioBento onSelectService={(s) => onOpenInquiry(s)} />
      <ExploreServicesVisual onSelectService={(s) => onOpenInquiry(s)} />
      <ServiceProcess />
    </div>
  );
};

export default Services;
