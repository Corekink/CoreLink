import React from 'react';
import { useOutletContext } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { BRANDING } from '@/data/branding';
import { PageMeta } from '@/components/PageMeta';

interface LayoutContext {
  onOpenInquiry: (serviceName?: string) => void;
}

const EuropeVisa: React.FC = () => {
  const { onOpenInquiry } = useOutletContext<LayoutContext>();

  const schengenCountries = [
    { name: 'Germany', type: 'Tourist / Business / National D', processing: '15 - 21 Days', popular: true },
    { name: 'France', type: 'Short-Stay Schengen / Talent', processing: '15 - 20 Days', popular: true },
    { name: 'Italy', type: 'Tourist & Business Visa', processing: '15 - 25 Days', popular: true },
    { name: 'Spain', type: 'BLS Appointment & Processing', processing: '14 - 21 Days', popular: true },
    { name: 'Switzerland', type: 'VFS Global Swiss Submission', processing: '10 - 15 Days', popular: false },
    { name: 'Netherlands', type: 'Schengen Business & Tourism', processing: '15 - 20 Days', popular: false },
    { name: 'Austria', type: 'VFS Visa Assistance', processing: '15 - 20 Days', popular: false },
    { name: 'Portugal', type: 'Schengen & D7/D8 Guidance', processing: '20 - 30 Days', popular: false },
    { name: 'Poland', type: 'National Employment / Schengen', processing: '20 - 35 Days', popular: true },
  ];

  return (
    <div id="europe-visa" className="bg-[#050B14] text-white">
      <PageMeta
        title="Europe & Schengen Visa Assistance"
        description="Schengen tourist and business visa application dossier preparation, VFS / TLS / BLS appointment booking, and flight/hotel itineraries."
      />
      {/* Header Banner */}
      <section className="pt-20 pb-16 px-4 text-center border-b border-white/5 bg-gradient-to-b from-[#0B1528] to-[#050B14]">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
            SCHENGEN & EUROPEAN MOBILITY
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-sans">
            Europe & Schengen Visa Assistance
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Guaranteed appointment booking assistance (VFS / TLSContact / BLS), comprehensive itinerary planning, travel insurance, and embassy packaging.
          </p>
        </div>
      </section>

      {/* Grid of European Countries */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {schengenCountries.map((c, idx) => (
            <div
              key={idx}
              onClick={() => onOpenInquiry(`Europe Visa: ${c.name}`)}
              className="p-7 rounded-3xl bg-[#0B1528] border border-white/10 hover:border-[#D4AF37] transition-all cursor-pointer group shadow-xl relative overflow-hidden"
            >
              {c.popular && (
                <span className="absolute top-4 right-4 bg-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30">
                  High Demand
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{c.name}</h3>
              <p className="text-xs text-slate-400 mb-4">{c.type}</p>
              
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400">Processing Window:</span>
                <span className="font-mono font-semibold text-slate-200">{c.processing}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Process Checklist */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">What We Provide for European Visas:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex gap-3">
              <Icons.Calendar className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">Appointment Slot Hunting</h4>
                <p className="text-xs text-slate-400 mt-1">Prompt notifications for genuine embassy slots.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Icons.FileCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">Cover Letter & Itinerary</h4>
                <p className="text-xs text-slate-400 mt-1">Flight reservations and compliant hotel bookings.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Icons.Shield className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">Schengen Travel Insurance</h4>
                <p className="text-xs text-slate-400 mt-1">€30,000+ medical cover compliant with EU directives.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Icons.HelpCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">Mock Interview Prep</h4>
                <p className="text-xs text-slate-400 mt-1">Orientation for biometric and consular meetings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EuropeVisa;
