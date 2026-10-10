import React from 'react';
import { useOutletContext } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { BRANDING, getWhatsAppUrl } from '@/data/branding';
import { PageMeta } from '@/components/PageMeta';

interface LayoutContext {
  onOpenInquiry: (serviceName?: string) => void;
}

const Manpower: React.FC = () => {
  const { onOpenInquiry } = useOutletContext<LayoutContext>();

  const categories = [
    { title: 'Executive & Management', desc: 'C-level, finance directors, operations leads, and project directors.', count: '1,200+ Placed' },
    { title: 'Engineering & Construction', desc: 'Civil, MEP, mechanical, site architects, and safety inspectors.', count: '4,500+ Placed' },
    { title: 'Hospitality & F&B', desc: 'Hotel staff, executive chefs, barista teams, front-of-house specialists.', count: '2,800+ Placed' },
    { title: 'Logistics & Operations', desc: 'Fleet controllers, warehouse managers, inventory specialists.', count: '3,100+ Placed' },
    { title: 'Healthcare & Nursing', desc: 'Licensed MOH/DHA/DoH nurses, therapists, clinic coordinators.', count: '850+ Placed' },
    { title: 'Technical & Skilled Labor', desc: 'Electricians, HVAC technicians, fabricators, and certified mechanics.', count: '6,200+ Placed' },
  ];

  return (
    <div id="manpower-section" className="bg-[#050B14] text-white">
      <PageMeta
        title="Manpower Solutions & Workforce Supply"
        description="Skilled, executive, and technical workforce recruitment, quota allocation, and labor mobilization across the UAE."
      />
      {/* Header Banner */}
      <section className="pt-24 pb-12 px-4 text-center border-b border-white/5 bg-gradient-to-b from-[#0B1528] to-[#050B14]">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
            TALENT & WORKFORCE MOBILISATION
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-sans">
            Manpower Solutions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            End-to-end recruitment, quota management, overseas sourcing, and onboarding support for businesses across the UAE.
          </p>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => onOpenInquiry(`Manpower: ${cat.title}`)}
              className="p-8 rounded-3xl bg-[#0B1528] border border-white/10 hover:border-[#D4AF37] transition-all cursor-pointer group shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20">
                  {cat.count}
                </span>
                <Icons.Users className="w-5 h-5 text-slate-400 group-hover:text-[#D4AF37] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{cat.desc}</p>
              <button className="text-xs font-bold text-[#D4AF37] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Request Sourcing →
              </button>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0B1528] via-[#131F33] to-[#0B1528] border border-white/10 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Need a custom workforce deployment?</h3>
            <p className="text-slate-400 text-sm max-w-xl">
              We manage offer letters, embassy attestations, visa quotas, flights, and medicals in one unified package.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('manpower')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-xl flex items-center gap-2 shrink-0 transition-all"
          >
            <Icons.MessageSquare className="w-4 h-4" />
            Discuss on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Manpower;
