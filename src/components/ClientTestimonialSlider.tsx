import React, { useState, useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Testimonial {
  id: string;
  category: 'golden-visa' | 'corporate-pro' | 'business-setup' | 'europe-visa' | 'manpower';
  categoryLabel: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatarUrl: string;
  avatarInitials: string;
  avatarColor: string;
  rating: number;
  outcomeBadge: string;
  serviceTitle: string;
  quote: string;
  date: string;
}

interface ClientTestimonialSliderProps {
  onOpenInquiry?: (serviceName?: string) => void;
}

export const ClientTestimonialSlider: React.FC<ClientTestimonialSliderProps> = ({
  onOpenInquiry,
}) => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      category: 'golden-visa',
      categoryLabel: '10-Year Golden Visa',
      name: 'Dr. Rashid Al Nuaimi',
      role: 'Executive Managing Director',
      company: 'Falcon Crest Family Office',
      location: 'Dubai & Abu Dhabi',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      avatarInitials: 'RN',
      avatarColor: 'from-[#D4AF37] to-[#1E2E4A]',
      rating: 5,
      outcomeBadge: '10-Year Nominee Approved in 4 Days',
      serviceTitle: 'UAE Golden Visa Nomination & VIP Medical',
      quote:
        'CORE LINK handled our family office investors’ Golden Visa nominations with unmatched precision. From ICP clearance to VIP medical typing, the entire process was concluded seamlessly without any administrative friction.',
      date: 'February 2026',
    },
    {
      id: '2',
      category: 'corporate-pro',
      categoryLabel: 'Corporate PRO Services',
      name: 'Tariq Al Hammadi',
      role: 'VP of Operations',
      company: 'TransGulf Logistics LLC',
      location: 'Ajman & Dubai Mainland',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      avatarInitials: 'TA',
      avatarColor: 'from-blue-600 to-indigo-800',
      rating: 5,
      outcomeBadge: '55+ MOHRE Work Permits Cleared',
      serviceTitle: 'Annual Corporate PRO Retainer & Quotas',
      quote:
        'Managing employee quotas, labor card renewals, and Ministry attestations for our 50+ fleet operators used to stall our operations. CORE LINK now handles all submissions via their 48-hour expedited desk.',
      date: 'January 2026',
    },
    {
      id: '3',
      category: 'business-setup',
      categoryLabel: 'Company Formation',
      name: 'Claire Henderson',
      role: 'Managing Partner',
      company: 'Vertex Media Global',
      location: 'Dubai Media City / DED',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      avatarInitials: 'CH',
      avatarColor: 'from-emerald-600 to-teal-800',
      rating: 5,
      outcomeBadge: 'Mainland Commercial License & MoA',
      serviceTitle: 'Turnkey Business Setup & Bank Accounts',
      quote:
        'Setting up a new commercial entity in the UAE seemed daunting until CORE LINK stepped in. They drafted our MoA, finalized our DED commercial license, and secured corporate banking within two weeks.',
      date: 'February 2026',
    },
    {
      id: '4',
      category: 'europe-visa',
      categoryLabel: 'Europe & Schengen Visa',
      name: 'Elena Mikhailova',
      role: 'Founder & CEO',
      company: 'Aurora Tech Ventures',
      location: 'Dubai Internet City',
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
      avatarInitials: 'EM',
      avatarColor: 'from-purple-600 to-indigo-900',
      rating: 5,
      outcomeBadge: 'Multiple-Entry 2-Year Schengen Granted',
      serviceTitle: 'Germany & France Business Visa Packaging',
      quote:
        'Their European visa desk is exceptional. They secured hard-to-find VFS appointment slots, organized our compliant flight and hotel vouchers, and thoroughly prepared our documentation. Granted on the first submission!',
      date: 'January 2026',
    },
    {
      id: '5',
      category: 'manpower',
      categoryLabel: 'Manpower Solutions',
      name: 'Siddharth Menon',
      role: 'Project Director',
      company: 'Apex Engineering & Infra',
      location: 'UAE Northern Emirates',
      avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80',
      avatarInitials: 'SM',
      avatarColor: 'from-amber-600 to-orange-800',
      rating: 5,
      outcomeBadge: '120+ Technical Crew Mobilised',
      serviceTitle: 'Overseas Manpower Sourcing & Visas',
      quote:
        'When we won a major infrastructure project requiring 120 certified technicians, CORE LINK managed the entire overseas recruitment pipeline, embassy attestations, flight tickets, and visa stamping flawlessly.',
      date: 'December 2025',
    },
    {
      id: '6',
      category: 'corporate-pro',
      categoryLabel: 'Document Legalisation',
      name: 'Claire Dupuis',
      role: 'Head of Legal & Compliance',
      company: 'Levant Advisory Partners',
      location: 'Dubai International Financial Centre',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      avatarInitials: 'CD',
      avatarColor: 'from-rose-600 to-red-900',
      rating: 5,
      outcomeBadge: 'MOFA & Embassy Attestations in 72h',
      serviceTitle: 'Cross-Border Legal Document Clearances',
      quote:
        'Extremely reliable for highly sensitive corporate and legal notarizations. CORE LINK’s team maintained absolute confidentiality while expediting our foreign board resolutions through the Ministry of Foreign Affairs.',
      date: 'January 2026',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Testimonials' },
    { id: 'golden-visa', label: 'Golden Visa' },
    { id: 'corporate-pro', label: 'Corporate PRO' },
    { id: 'business-setup', label: 'Company Setup' },
    { id: 'europe-visa', label: 'Europe & Schengen' },
    { id: 'manpower', label: 'Manpower' },
  ];

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const filteredTestimonials =
    activeCategory === 'all'
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Autoplay handler
  useEffect(() => {
    if (!isAutoPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prev) =>
        prev >= filteredTestimonials.length - 1 ? 0 : prev + 1
      );
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, filteredTestimonials.length]);

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) =>
      prev >= filteredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) =>
      prev <= 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  const current = filteredTestimonials[currentIndex] || filteredTestimonials[0];

  return (
    <section
      id="client-testimonials-section"
      className="py-12 lg:py-16 px-4 sm:px-6 lg:px-12 bg-[#050B14] relative overflow-hidden text-white border-t border-white/5"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-bold tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            CLIENT REPUTATION & SUCCESS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-white">
            Trusted by Leaders, Investors <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-[#D4AF37] bg-clip-text text-transparent">
              & Growing Enterprises
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover how CORE LINK accelerates official clearances, eliminates regulatory bottlenecks, and secures approvals for clients across the UAE and worldwide.
          </p>
        </div>

        {/* Category Filters Pill Strip */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#1E2E4A] text-slate-950 font-bold shadow-lg shadow-[#D4AF37]/20 scale-105'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Testimonial Slider Stage */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0E1626] to-[#0B1528] border border-white/15 p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden group">
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

            {/* Slider Content with Motion */}
            <div className="relative min-h-[320px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: direction === 'right' ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction === 'right' ? -40 : 40 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="space-y-8"
                >
                  {/* Top Row: Meta Badges & Rating */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                    
                    {/* Service & Outcome Pill */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-[11px] font-mono font-bold tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/25 px-3 py-1 rounded-full uppercase">
                        {current.categoryLabel}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                        <Icons.CheckCircle className="w-3.5 h-3.5" />
                        {current.outcomeBadge}
                      </span>
                    </div>

                    {/* 5-Star Rating */}
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      {[...Array(current.rating)].map((_, i) => (
                        <Icons.Star
                          key={i}
                          className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
                        />
                      ))}
                      <span className="text-xs font-bold text-slate-300 ml-2 font-mono">
                        5.0 / 5.0
                      </span>
                    </div>

                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative">
                    <Icons.Quote className="w-12 h-12 text-[#D4AF37]/20 absolute -top-4 -left-4 pointer-events-none" />
                    <p className="text-lg sm:text-2xl font-normal leading-relaxed text-slate-100 italic relative z-10 pl-4 sm:pl-6">
                      “{current.quote}”
                    </p>
                  </div>

                  {/* Author Meta Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                    
                    {/* User Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-xl shrink-0 bg-[#0B1220] relative">
                        <img
                          src={current.avatarUrl}
                          alt={current.name}
                          loading="lazy"
                          decoding="async"
                          width={56}
                          height={56}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-white font-sans">
                            {current.name}
                          </h4>
                          <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono font-semibold text-blue-400 flex items-center gap-1">
                            <Icons.ShieldCheck className="w-3 h-3" />
                            Verified Client
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 font-medium mt-0.5">
                          {current.role} · <strong className="text-white">{current.company}</strong>
                        </p>
                        <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                          <Icons.MapPin className="w-3 h-3 text-[#D4AF37]" />
                          {current.location}
                          <span className="mx-1.5 text-slate-600">·</span>
                          <span className="text-slate-400 font-mono">{current.date}</span>
                        </p>
                      </div>
                    </div>

                    {/* Action button inside slide */}
                    <button
                      type="button"
                      onClick={() => onOpenInquiry?.(current.serviceTitle)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/50 text-xs font-semibold text-slate-200 hover:text-white transition-all self-start sm:self-center"
                    >
                      <span>Inquire About This Service</span>
                      <Icons.ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </button>

                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Bottom Navigation & Controls */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {filteredTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 'right' : 'left');
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-8 bg-[#D4AF37] shadow-md shadow-[#D4AF37]/40'
                        : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
                <span className="text-xs text-slate-400 font-mono ml-2">
                  {currentIndex + 1} / {filteredTestimonials.length}
                </span>
              </div>

              {/* Slider Action Buttons */}
              <div className="flex items-center gap-3">
                
                {/* Autoplay toggle */}
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  {isAutoPlaying ? (
                    <>
                      <Icons.Pause className="w-3 h-3 text-[#D4AF37]" />
                      <span>Auto-Playing</span>
                    </>
                  ) : (
                    <>
                      <Icons.Play className="w-3 h-3 text-slate-400" />
                      <span>Paused</span>
                    </>
                  )}
                </button>

                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-xl bg-white/[0.05] hover:bg-[#D4AF37] hover:text-slate-950 border border-white/10 hover:border-[#D4AF37] text-slate-200 flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <Icons.ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-xl bg-white/[0.05] hover:bg-[#D4AF37] hover:text-slate-950 border border-white/10 hover:border-[#D4AF37] text-slate-200 flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <Icons.ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </button>

              </div>

            </div>

          </div>
        </div>

        {/* Thumbnail Selector Row */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {filteredTestimonials.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setDirection(idx > currentIndex ? 'right' : 'left');
                setCurrentIndex(idx);
              }}
              className={`p-3 rounded-2xl text-left transition-all border ${
                currentIndex === idx
                  ? 'bg-[#0E1626] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10 scale-[1.02]'
                  : 'bg-white/[0.02] border-white/5 hover:border-white/15 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="text-[10px] font-mono text-[#D4AF37] font-bold uppercase truncate">
                {item.categoryLabel}
              </div>
              <div className="text-xs font-bold text-white truncate mt-0.5">
                {item.name}
              </div>
              <div className="text-[10px] text-slate-400 truncate">
                {item.company}
              </div>
            </button>
          ))}
        </div>

        {/* Reputation Stats Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="flex items-center justify-center gap-1 text-[#D4AF37] mb-1">
              <span className="text-2xl sm:text-3xl font-black font-sans text-white">4.96</span>
              <Icons.Star className="w-5 h-5 fill-[#D4AF37]" />
            </div>
            <p className="text-xs text-slate-400 font-medium">Average Review Rating</p>
          </div>
          <div className="border-l border-white/10">
            <span className="text-2xl sm:text-3xl font-black font-sans text-white">15,000+</span>
            <p className="text-xs text-slate-400 font-medium">Processed Applications</p>
          </div>
          <div className="border-l border-white/10">
            <span className="text-2xl sm:text-3xl font-black font-sans text-[#D4AF37]">99.4%</span>
            <p className="text-xs text-slate-400 font-medium">First-Pass Approval Rate</p>
          </div>
          <div className="border-l border-white/10">
            <span className="text-2xl sm:text-3xl font-black font-sans text-emerald-400">500+</span>
            <p className="text-xs text-slate-400 font-medium">Retained Corporate Clients</p>
          </div>
        </div>

      </div>
    </section>
  );
};
