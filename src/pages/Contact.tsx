import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { ContactSection } from '@/components/ContactSection';
import { BRANDING } from '@/data/branding';
import * as Icons from 'lucide-react';
import { PageMeta } from '@/components/PageMeta';

interface LayoutContext {
  onOpenInquiry: (serviceName?: string) => void;
}

const Contact: React.FC = () => {
  const { onOpenInquiry } = useOutletContext<LayoutContext>();

  return (
    <div className="bg-[#050B14] text-white">
      <PageMeta
        title="Contact Us & Branch Locations"
        description="Contact CORE LINK Administrative Services in Ajman and Dubai. Call 06 805 5093 or WhatsApp +971 56 805 5093 for VIP government liaison."
      />
      {/* Header Banner */}
      <section className="pt-24 pb-12 px-4 text-center border-b border-white/5 bg-gradient-to-b from-[#0B1528] to-[#050B14]">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
            GET IN TOUCH
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-sans">
            Contact CORE LINK
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Visit our office in Ajman or speak with our senior government relations advisors directly.
          </p>
        </div>
      </section>

      {/* Main Contact Form & Location */}
      <ContactSection
        initialService="General Inquiry"
        currentLang="en"
        onSelectService={(s) => onOpenInquiry(s)}
      />
    </div>
  );
};

export default Contact;
