import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { BusinessServices as BusinessServicesSection } from '@/components/BusinessServices';
import { WhyCoreLink } from '@/components/WhyCoreLink';
import { HowCoreLinkWorks } from '@/components/HowCoreLinkWorks';
import { PageMeta } from '@/components/PageMeta';

interface LayoutContext {
  onOpenInquiry: (serviceName?: string) => void;
}

const BusinessServices: React.FC = () => {
  const { onOpenInquiry } = useOutletContext<LayoutContext>();

  return (
    <div className="bg-[#050B14] text-white">
      <PageMeta
        title="Business Setup & Corporate PRO Services"
        description="Mainland LLC and Freezone turnkey business incorporation, commercial licensing, trade name registration, and corporate government liaison in UAE."
      />
      <BusinessServicesSection onSelectService={(s) => onOpenInquiry(s)} />
      <HowCoreLinkWorks />
      <WhyCoreLink />
    </div>
  );
};

export default BusinessServices;
