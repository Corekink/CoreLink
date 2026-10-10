import React from 'react';
import * as Icons from 'lucide-react';
import { PromoAd } from '../types';
import { getWhatsAppUrl } from '../data/branding';

interface PromoBannerProps {
  promo: PromoAd;
  onOpenInquiry: (serviceName?: string) => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ promo, onOpenInquiry }) => {
  const accentStyles = {
    gold: {
      border: 'border-[#D4AF37]/50',
      gradient: 'from-[#D4AF37]/25 via-[#080B11]/90 to-[#080B11]',
      text: 'text-[#D4AF37]',
      btn: 'bg-gradient-to-r from-[#D4AF37] to-[#1E2E4A] text-[#080B11]',
      glow: 'shadow-[#D4AF37]/20',
    },
    emerald: {
      border: 'border-emerald-500/50',
      gradient: 'from-emerald-600/25 via-[#080B11]/90 to-[#080B11]',
      text: 'text-emerald-400',
      btn: 'bg-gradient-to-r from-emerald-500 to-emerald-700 text-white',
      glow: 'shadow-emerald-500/20',
    },
    blue: {
      border: 'border-sky-500/50',
      gradient: 'from-sky-600/25 via-[#080B11]/90 to-[#080B11]',
      text: 'text-sky-400',
      btn: 'bg-gradient-to-r from-sky-500 to-blue-600 text-white',
      glow: 'shadow-sky-500/20',
    },
    purple: {
      border: 'border-purple-500/50',
      gradient: 'from-purple-600/25 via-[#080B11]/90 to-[#080B11]',
      text: 'text-purple-400',
      btn: 'bg-gradient-to-r from-purple-500 to-indigo-700 text-white',
      glow: 'shadow-purple-500/20',
    },
  }[promo.accentColor];

  return (
    <div className="my-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="promos-section">
      <div className={`relative overflow-hidden rounded-3xl bg-[#0E1420] border ${accentStyles.border} shadow-2xl ${accentStyles.glow} transition-all duration-500 group hover:scale-[1.01]`}>
        
        {/* Background Image with Parallax & Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={promo.imageUrl}
            alt={promo.title}
            className="w-full h-full object-cover object-center opacity-30 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${accentStyles.gradient}`}></div>
        </div>

        {/* Banner Content */}
        <div className="relative z-10 p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          <div className="max-w-2xl space-y-4">
            {/* Promotional VIP Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-slate-700 backdrop-blur-md">
              <span className={`text-xs font-bold tracking-wider uppercase ${accentStyles.text}`}>
                {promo.badge}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {promo.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed">
              {promo.subtitle}
            </p>
          </div>

          {/* CTA Action */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <button
              onClick={() => onOpenInquiry(promo.title)}
              className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 transform group-hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ${accentStyles.btn}`}
            >
              <span>{promo.ctaText}</span>
              <Icons.ArrowRight className="w-5 h-5" />
            </button>
            <a
              href={getWhatsAppUrl(promo.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm flex items-center justify-center gap-2 transition-colors backdrop-blur-md"
            >
              <Icons.MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp VIP</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
