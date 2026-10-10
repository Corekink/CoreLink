import React from 'react';
import * as Icons from 'lucide-react';
import { PageMeta } from '@/components/PageMeta';

const VisaDisclaimer: React.FC = () => {
  return (
    <div className="bg-[#050B14] text-white py-20 px-4 sm:px-6 lg:px-12">
      <PageMeta
        title="Official Visa & Regulatory Disclaimer"
        description="Official regulatory transparency and non-affiliation disclaimer for UAE and international visa clearing."
      />
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-2">
            REGULATORY COMPLIANCE
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight">Visa & Government Disclaimer</h1>
          <p className="text-slate-400 text-sm mt-2">Notice to all prospective clients and applicants</p>
        </div>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed bg-[#0B1528] p-8 sm:p-10 rounded-3xl border border-white/10">
          <div className="p-4 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-start gap-4">
            <Icons.AlertTriangle className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" />
            <p className="text-xs text-white leading-relaxed font-semibold">
              CORE LINK Administrative Services is an independent administrative support and document clearing company. We are NOT an embassy, consulate, or government ministry.
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">No Guarantee of Outcome</h2>
            <p>
              While CORE LINK ensures precise document preparation and procedural compliance, all visa approvals, residence permits, entry permits, trade licenses, and embassy authorizations remain under the sole and unappealable discretion of the respective sovereign immigration and government authorities.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">Processing Timelines</h2>
            <p>
              All published processing timelines are estimates based on standard operational averages and may be subject to administrative delays, security clearances, or holidays imposed by governmental bodies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VisaDisclaimer;
