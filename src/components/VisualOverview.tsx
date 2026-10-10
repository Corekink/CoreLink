import React from 'react';
import * as Icons from 'lucide-react';
import { IMAGES } from '../data/images';

interface VisualOverviewProps {
  onBrowsePortfolio: () => void;
}

export const VisualOverview: React.FC<VisualOverviewProps> = ({ onBrowsePortfolio }) => {
  return (
    <section className="bg-[#050B14] py-12 lg:py-16 relative text-white border-t border-white/10 overflow-hidden">
      {/* Glow backdrop */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copywriting */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-xs font-bold font-mono tracking-[0.2em] text-[#D4AF37] uppercase">
              <Icons.Eye className="w-3.5 h-3.5" />
              AUTHENTIC GOVERNMENT EXECUTION
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-[1.15] font-sans">
              Authorised UAE processing with zero guesswork.
            </h2>

            {/* Description */}
            <p className="text-base text-slate-300 leading-relaxed max-w-xl">
              From GDRFA & ICP residency clearances to DED company formations and global VFS visa submissions, our certified administrative team ensures rapid turnaround with 100% legal compliance across all seven Emirates.
            </p>

            {/* Features Row */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl font-bold text-[#D4AF37] font-mono">100%</div>
                <div className="text-xs text-slate-300 font-medium mt-1">GDRFA & ICP Direct Portals</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl font-bold text-emerald-400 font-mono">24h SLA</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Express Notary & Legal Typing</div>
              </div>
            </div>

            {/* Link */}
            <div className="pt-2">
              <button
                onClick={onBrowsePortfolio}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-[#D4AF37]/15 border border-white/10 hover:border-[#D4AF37] text-sm font-bold text-white transition-all group"
              >
                <span>Browse all administrative services</span>
                <Icons.ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Work Operations Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-950 group">
              <img
                src={IMAGES.dubaiSkylineSunset}
                alt="Dubai Administrative Operations"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
              
              {/* Work Desk Operation Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-[#0B1528]/90 backdrop-blur-md border border-white/15 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#D4AF37]/50 shrink-0 bg-slate-800">
                    <img
                      src={IMAGES.uaePassportDesk}
                      alt="Work Processing Desk"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      Full-Service UAE Document Hub
                    </h4>
                    <p className="text-xs text-slate-300">
                      Authorised typing, attestation & corporate PRO desk
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-[11px] font-mono font-bold border border-[#D4AF37]/40">
                  ONLINE QUEUE
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

