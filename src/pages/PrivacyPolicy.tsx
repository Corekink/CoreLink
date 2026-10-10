import React from 'react';
import * as Icons from 'lucide-react';
import { PageMeta } from '@/components/PageMeta';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-[#050B14] text-white py-20 px-4 sm:px-6 lg:px-12">
      <PageMeta
        title="Privacy & Data Protection Policy"
        description="Official privacy policy and personal data protection principles of CORE LINK Administrative Services in the UAE."
      />
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-2">
            LEGAL DOCUMENTATION
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight">Privacy Policy</h1>
          <p className="text-slate-400 text-sm mt-2">Effective Date: January 1, 2026 · CORE LINK Administrative Services</p>
        </div>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed bg-[#0B1528] p-8 sm:p-10 rounded-3xl border border-white/10">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
            <p>
              To provide administrative services, visa application filing, corporate licensing, and PRO facilitation, CORE LINK collects personal information including passport copies, national identification cards, educational certificates, trade license certificates, photographs, and contact numbers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Purpose of Processing</h2>
            <p>
              Your personal data is solely processed to prepare and submit official applications to UAE federal authorities (such as ICP, GDRFA, MOHRE, DED, and respective Free Zone authorities), international embassies, and certified translation centers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Data Security & Confidentiality</h2>
            <p>
              All confidential corporate and personal records are safeguarded with strict access controls, encryption, and secure archiving. We never sell or distribute your data to third-party commercial marketing entities.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Contact Our Privacy Officer</h2>
            <p>
              If you have any questions or wish to request data erasure following completed administrative cases, please email us at <a href="mailto:admin@corelinkservices.ae" className="text-[#D4AF37] underline">admin@corelinkservices.ae</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
