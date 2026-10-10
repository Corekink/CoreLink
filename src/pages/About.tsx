import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { WhatWeDo } from '@/components/WhatWeDo';
import { WhyCoreLink } from '@/components/WhyCoreLink';
import { GovReferences } from '@/components/GovReferences';
import { BRANDING } from '@/data/branding';
import * as Icons from 'lucide-react';
import { PageMeta } from '@/components/PageMeta';

interface LayoutContext {
  onOpenInquiry: (serviceName?: string) => void;
}

const About: React.FC = () => {
  const { onOpenInquiry } = useOutletContext<LayoutContext>();

  return (
    <div className="bg-[#050B14] text-white">
      <PageMeta
        title="About Our Agency"
        description="Learn about CORE LINK Administrative Services: accredited UAE government document clearing, corporate PRO facilitation, and visa management."
      />
      {/* Header Banner */}
      <section className="pt-24 pb-12 px-4 text-center border-b border-white/5 bg-gradient-to-b from-[#0B1528] to-[#050B14]">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
            WHO WE ARE
            <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-sans">
            About CORE LINK
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Your trusted UAE administrative partner providing expert visa facilitation, corporate formation, PRO services, and manpower solutions.
          </p>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-white">
              Bridging Businesses & Individuals to Effortless UAE Administration
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded with the objective of eliminating bureaucratic friction in the UAE, CORE LINK Administrative Services provides reliable, transparent, and expedited support across government departments and international visa channels.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              We leverage our extensive knowledge of UAE administrative protocols, federal regulations, and immigration procedures to deliver high-quality outcomes for startups, corporate entities, and global professionals.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-3xl font-black text-[#D4AF37] font-mono">10,000+</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Applications Facilitated</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-3xl font-black text-[#D4AF37] font-mono">99.4%</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Dubai Skyline"
              className="w-full h-[460px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0B1528]/90 backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-3">
                <Icons.Award className="w-8 h-8 text-[#D4AF37]" />
                <div>
                  <h4 className="text-white font-bold text-sm">Official UAE Registered Entity</h4>
                  <p className="text-xs text-slate-400">Headquartered in Ajman, serving all 7 Emirates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyCoreLink />
      <WhatWeDo currentLang="en" onSelectService={(s) => onOpenInquiry(s)} />
      <GovReferences onSelectEntity={(e) => onOpenInquiry(`${e} Support`)} />
    </div>
  );
};

export default About;
