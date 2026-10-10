import React, { useState } from 'react';
import * as Icons from 'lucide-react';

export const PartnerSuccess: React.FC = () => {
  const testimonials = [
    {
      stars: 5,
      quote:
        'Their Europe visa coordination saved weeks of back-and-forth. Documents were prepared with precision and appointments were managed without delay.',
      name: 'Tariq Al Mansoori',
      initial: 'T',
      role: 'Travel & Ticketing Partner',
      service: 'Schengen Visa Coordination',
      audience: 'Europe-bound clients',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      stars: 5,
      quote:
        'Managing employee trade licenses and corporate visas for 40+ staff used to take all month. CORE LINK made it a 48-hour seamless operation.',
      name: 'Michael Henderson',
      initial: 'M',
      role: 'Managing Director, Logistics Group',
      service: 'Corporate PRO & Labour Quotas',
      audience: 'UAE Mainland Enterprise',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    {
      stars: 5,
      quote:
        'Fast Golden Visa processing and VIP Emirates ID typing. Our executive investors received their 10-year residency without waiting in queues.',
      name: 'Amira Al Hashimi',
      initial: 'A',
      role: 'Family Office Representative',
      service: '10-Year Golden Visa & VIP Medical',
      audience: 'Private Wealth Clients',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-[#F8F9FA] py-12 lg:py-16 relative text-slate-900 border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
            PARTNER SUCCESS
            <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-sans">
            Trusted by Businesses & Partners
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal">
            Success stories from partners who rely on CORE LINK for their administrative and visa operations.
          </p>
        </div>

        {/* Testimonial Luxury Dark Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-[#0B1528] text-white border border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Big Quote Mark & Stars */}
              <div className="md:col-span-3 flex flex-col justify-between h-full">
                <div className="text-5xl sm:text-6xl font-black text-[#D4AF37]/30 font-serif leading-none">
                  99
                </div>
                <div className="flex items-center gap-1 text-[#D4AF37] mt-4">
                  {[...Array(current.stars)].map((_, i) => (
                    <Icons.Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Middle/Right: Quote & Author Details */}
              <div className="md:col-span-9 space-y-6">
                <p className="text-lg sm:text-xl font-normal leading-relaxed text-slate-100 italic">
                  “{current.quote}”
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37]/60 shadow-lg shrink-0 bg-[#182438]">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-sans">
                      {current.name}
                    </h4>
                    <p className="text-xs text-slate-300 font-medium">
                      {current.role}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px] text-[#D4AF37] font-medium font-mono">
                        {current.service}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {current.audience}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Row: Dots & Navigation Arrows */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      currentIndex === idx ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-slate-700'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-9 h-9 rounded-full bg-[#162238] border border-white/10 hover:border-[#D4AF37] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Previous"
                >
                  <Icons.ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-9 h-9 rounded-full bg-[#162238] border border-white/10 hover:border-[#D4AF37] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Next"
                >
                  <Icons.ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
