import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { GovReferences } from '@/components/GovReferences';
import { PartnerSuccess } from '@/components/PartnerSuccess';
import { BRANDING } from '@/data/branding';
import * as Icons from 'lucide-react';
import { PageMeta } from '@/components/PageMeta';

interface LayoutContext {
  onOpenInquiry: (serviceName?: string) => void;
}

const Agency: React.FC = () => {
  const { onOpenInquiry } = useOutletContext<LayoutContext>();

  const credentials = [
    { title: 'Corporate PRO Entity', desc: 'Direct registered representative across federal and local UAE departments.' },
    { title: 'Ajman & Dubai Operations', desc: 'Strategic hubs catering to mainland, free zone, and offshore businesses.' },
    { title: 'Multilingual Legal Typists', desc: 'Native Arabic, English, Urdu, Tagalog, and Hindi speaking document consultants.' },
    { title: 'Data Confidentiality & Security', desc: 'Strict non-disclosure standards for sensitive passport and financial records.' },
  ];

  return (
    <div className="bg-[#050B14] text-white">
      <PageMeta
        title="Agency Credentials & Accreditation"
        description="Official licensing, UAE government certifications, compliance guarantees, and authorized PRO liaison desks of CORE LINK."
      />
      {/* Header Banner */}
      <section className="pt-20 pb-16 px-4 text-center border-b border-white/5 bg-gradient-to-b from-[#0B1528] to-[#050B14]">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
            OFFICIAL LIAISON
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-sans">
            Agency Credentials & Licensing
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            CORE LINK operates as an authorized administrative services provider in the United Arab Emirates.
          </p>
        </div>
      </section>

      {/* Agency Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((c, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#0B1528] border border-white/10 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-4">
                <Icons.CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Official Details Panel */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
          <h2 className="text-2xl font-bold text-white">Agency Registration Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-slate-300">
            <div>
              <span className="text-xs text-slate-500 block uppercase font-mono">Entity Name</span>
              <strong className="text-white">CORE LINK Administrative Services</strong>
            </div>
            <div>
              <span className="text-xs text-slate-500 block uppercase font-mono">Jurisdiction</span>
              <strong className="text-white">United Arab Emirates (Ajman & Dubai)</strong>
            </div>
            <div>
              <span className="text-xs text-slate-500 block uppercase font-mono">Primary Activity</span>
              <strong className="text-white">Administrative & PRO Facilitation</strong>
            </div>
            <div>
              <span className="text-xs text-slate-500 block uppercase font-mono">Official Website</span>
              <a href="https://corelinkservices.ae" target="_blank" rel="noreferrer" className="text-[#D4AF37] font-mono">
                corelinkservices.ae
              </a>
            </div>
            <div>
              <span className="text-xs text-slate-500 block uppercase font-mono">General Email</span>
              <a href="mailto:info@corelinkservices.ae" className="text-[#D4AF37]">
                info@corelinkservices.ae
              </a>
            </div>
            <div>
              <span className="text-xs text-slate-500 block uppercase font-mono">Operating Hours</span>
              <span className="text-white">Sat – Thu: 9:00 AM – 7:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      <GovReferences onSelectEntity={(e) => onOpenInquiry(`${e} Support`)} />
      <PartnerSuccess />
    </div>
  );
};

export default Agency;
