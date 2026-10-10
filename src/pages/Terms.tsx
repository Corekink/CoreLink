import React from 'react';
import { PageMeta } from '@/components/PageMeta';

const Terms: React.FC = () => {
  return (
    <div className="bg-[#050B14] text-white py-20 px-4 sm:px-6 lg:px-12">
      <PageMeta
        title="Terms of Service & Engagement"
        description="Terms and conditions of engagement for commercial document clearing and administrative support by CORE LINK."
      />
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-2">
            TERMS OF SERVICE
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight">Terms & Conditions</h1>
          <p className="text-slate-400 text-sm mt-2">Effective Date: January 1, 2026 · CORE LINK Administrative Services</p>
        </div>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed bg-[#0B1528] p-8 sm:p-10 rounded-3xl border border-white/10">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Scope of Engagement</h2>
            <p>
              CORE LINK Administrative Services provides professional assistance with document preparation, typing, application submission, and liaison with government departments. We do not act as an immigration tribunal or government issuance authority.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Government Fees & Service Charges</h2>
            <p>
              Official government fees charged by ministries, immigration departments, embassies, and municipalities are subject to regulatory updates. Service fees charged by CORE LINK cover professional administrative processing and document clearance.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Client Responsibilities</h2>
            <p>
              Clients are responsible for providing authentic, untampered, and valid documentation. CORE LINK assumes no liability for rejections or legal penalties resulting from fraudulent or incorrect records submitted by clients.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
