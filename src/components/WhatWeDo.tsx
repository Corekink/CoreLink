import React from 'react';
import * as Icons from 'lucide-react';
import { IMAGES } from '../data/images';

interface WhatWeDoProps {
  onSeeAllServices: () => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onSeeAllServices }) => {
  return (
    <section id="about-section" className="bg-white py-12 lg:py-16 relative text-slate-900 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Executive Photo & Floating Badges */}
          <div className="lg:col-span-6 relative">
            
            {/* Top-Left Floating Document Badge */}
            <div className="absolute -top-4 left-6 z-20 w-11 h-11 rounded-2xl bg-white border border-slate-200/80 shadow-xl flex items-center justify-center text-amber-700">
              <Icons.FileText className="w-5 h-5" />
            </div>

            {/* Main Executive Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
              <img
                src={IMAGES.arabExecutiveDesk}
                alt="Executive at Dubai desk signing documentation"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center"
              />
            </div>

            {/* Bottom Floating 360 Badge */}
            <div className="absolute -bottom-5 right-8 z-20 px-5 py-3 rounded-2xl bg-[#0B1220] border border-white/10 shadow-2xl flex items-center gap-3 text-white">
              <span className="text-xl font-black text-[#D4AF37] font-sans">360°</span>
              <div className="text-[11px] text-slate-300 font-medium leading-tight text-left">
                Administrative<br />support
              </div>
            </div>

          </div>

          {/* Right Column: Copywriting & Bullet Points */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <div className="text-xs font-bold font-mono tracking-[0.2em] text-[#D4AF37] uppercase">
              WHAT CORE LINK DOES
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.15] font-sans">
              From Documentation<br />
              to <span className="text-[#D4AF37]">Opportunity.</span>
            </h2>

            {/* Description */}
            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              We turn complex administrative procedures into clear, managed processes — so individuals, employers and partners can move forward with confidence.
            </p>

            {/* Feature Points */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Feature 1: Visa & Immigration */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#1E2E4A] shrink-0">
                  <Icons.Plane className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-sans">
                    Visa & Immigration
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    UAE and international visa application assistance.
                  </p>
                </div>
              </div>

              {/* Feature 2: Manpower Solutions */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#1E2E4A] shrink-0">
                  <Icons.Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-sans">
                    Manpower Solutions
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    Workforce recruitment coordination for employers.
                  </p>
                </div>
              </div>

            </div>

            {/* Action Link */}
            <div className="pt-6">
              <button
                onClick={onSeeAllServices}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#8C6418] hover:text-[#5C410F] transition-colors group"
              >
                <span>See all services</span>
                <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
