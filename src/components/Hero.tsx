import React, { useState, useRef, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { IMAGES } from '../data/images';
import { getWhatsAppUrl } from '../data/branding';
import { Interactive3DLiveHero } from './Interactive3DLiveHero';
import { AnimatedCounter, BUTTON_HOVER, BUTTON_TAP } from '@/lib/animations';

interface HeroProps {
  onOpenInquiry?: (serviceName?: string) => void;
  onRequestService?: () => void;
  onExploreServices?: () => void;
  onBecomePartner?: () => void;
  currentLang?: string;
}

const HERO_VIDEOS = [
  {
    id: 'dubai-skyline',
    title: 'Dubai Skyline & Business District',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-dubai-city-buildings-40347-large.mp4',
    altUrl: 'https://assets.mixkit.co/videos/preview/mixkit-dubai-city-view-from-the-sky-40348-large.mp4',
    poster: IMAGES.dubaiSkylineNight,
  },
  {
    id: 'dubai-business',
    title: 'DIFC & Corporate Business Towers',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-modern-buildings-in-dubai-financial-center-40349-large.mp4',
    altUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-dubai-city-buildings-40347-large.mp4',
    poster: IMAGES.companyFormation,
  },
];

export const Hero: React.FC<HeroProps> = ({
  onOpenInquiry,
  onRequestService,
  onExploreServices,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle Parallax on Background Layer
  const { scrollY } = useScroll();
  const bgParallax = useTransform(scrollY, [0, 800], [0, 100]);

  const activeVideo = HERO_VIDEOS[selectedVideoIndex];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, [selectedVideoIndex]);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVisaConsultation = () => {
    if (onOpenInquiry) {
      onOpenInquiry('UAE & International Visa Consultation');
    } else if (onRequestService) {
      onRequestService();
    }
  };

  const handleExplore = () => {
    if (onExploreServices) {
      onExploreServices();
    } else {
      const el =
        document.getElementById('core-services-section') ||
        document.getElementById('about-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Word-by-word reveal tokens
  const headlineWords = [
    { word: 'Your', gold: false },
    { word: 'Trusted', gold: false },
    { word: 'Partner', gold: false },
    { word: 'for', gold: false, breakAfter: true },
    { word: 'UAE', gold: true },
    { word: 'Residency,', gold: true },
    { word: 'Licensing', gold: true, breakAfter: true },
    { word: '&', gold: false },
    { word: 'Administrative', gold: false },
    { word: 'Services', gold: false },
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] sm:min-h-screen bg-[#050B14] flex flex-col justify-between pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden text-white"
    >
      {/* 1. Background Video Layer with subtle Parallax */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : bgParallax }}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.04 }}
        animate={
          shouldReduceMotion
            ? { opacity: 1, scale: 1 }
            : {
                opacity: 1,
                scale: [1.04, 1.08, 1.04],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0.5 }
            : {
                opacity: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                scale: { repeat: Infinity, duration: 22, ease: 'easeInOut' },
              }
        }
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <video
          ref={videoRef}
          key={activeVideo.id}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={activeVideo.poster}
          className="w-full h-full object-cover object-center opacity-25 filter brightness-90 contrast-110"
        >
          <source src={activeVideo.url} type="video/mp4" />
          <source src={activeVideo.altUrl} type="video/mp4" />
          <img
            src={activeVideo.poster}
            alt="Dubai Skyline"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </video>
      </motion.div>

      {/* Luxury Vignette & Subtle Gold Mesh Lighting */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050B14]/90 via-[#050B14]/80 to-[#050B14] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#1E2E4A]/30 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Top Stream Switcher Controls (Fade + Slide Down) */}
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full pt-1 pb-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1528]/80 backdrop-blur-md border border-white/10 text-xs text-slate-300 shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono font-medium">
            UAE GOVERNMENT CLEARANCE · <span className="text-[#D4AF37] font-bold">AJMAN & DUBAI</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={togglePlayPause}
            className="px-2.5 sm:px-3 py-1 rounded-full bg-[#050B14]/80 hover:bg-[#0B1528] border border-white/10 hover:border-[#D4AF37] text-[10px] sm:text-[11px] font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-all backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95"
            title={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
          >
            {isPlaying ? (
              <>
                <Icons.Pause className="w-3 h-3 text-[#D4AF37]" />
                <span className="hidden sm:inline">Pause</span>
              </>
            ) : (
              <>
                <Icons.Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                <span className="hidden sm:inline">Play</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setSelectedVideoIndex((prev) => (prev === 0 ? 1 : 0))}
            className="px-2.5 sm:px-3 py-1 rounded-full bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 border border-[#D4AF37]/30 text-[10px] sm:text-[11px] font-mono text-[#D4AF37] flex items-center gap-1.5 transition-all backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95"
            title="Switch Background View"
          >
            <Icons.Video className="w-3 h-3 text-[#D4AF37]" />
            <span className="hidden sm:inline">Switch Angle</span>
          </button>
        </div>
      </motion.div>

      {/* Main Hero Content (Choreographed Entrance) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Status / Identity Badge (Fade + Slide Down) */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: -20, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.16, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0B1528]/90 border border-[#D4AF37]/45 backdrop-blur-md shadow-xl"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                CORE LINK ADMINISTRATIVE SERVICES
              </span>
            </motion.div>

            {/* 2. Main Headline: word by word smooth reveal */}
            <h1 className="text-3xl sm:text-5xl xl:text-[58px] font-black tracking-tight leading-[1.1] text-white font-sans">
              {headlineWords.map((item, idx) => (
                <React.Fragment key={idx}>
                  <motion.span
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.18 + idx * 0.05,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`inline-block mr-2 sm:mr-3 ${
                      item.gold
                        ? 'text-[#D4AF37] drop-shadow-[0_4px_20px_rgba(212,175,55,0.35)]'
                        : 'text-white'
                    }`}
                  >
                    {item.word}
                  </motion.span>
                  {item.breakAfter && <br className="hidden sm:inline" />}
                </React.Fragment>
              ))}
            </h1>

            {/* 3. Core Pillars Subtext (Fade + Slide) */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono font-bold text-slate-300 tracking-wider uppercase"
            >
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white shadow-sm hover:border-[#D4AF37]/50 transition-colors">VISA</span>
              <span className="text-[#D4AF37]">•</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white shadow-sm hover:border-[#D4AF37]/50 transition-colors">TYPING</span>
              <span className="text-[#D4AF37]">•</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white shadow-sm hover:border-[#D4AF37]/50 transition-colors">LICENSING</span>
              <span className="text-[#D4AF37]">•</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white shadow-sm hover:border-[#D4AF37]/50 transition-colors">TICKETING</span>
            </motion.div>

            {/* 4. Paragraph: fade + translateY(25px) */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              Authorised corporate PRO facilitation, fast-track Golden Visas, ICP & GDRFA immigration clearance, and turnkey company formation backed by over a decade of administrative expertise across Ajman and Dubai.
            </motion.p>

            {/* 5. Primary CTA, Secondary CTA & WhatsApp: fade + translateY(25px) */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.82, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              {/* Primary CTA with lift & active scale */}
              <motion.button
                id="hero-visa-consultation-btn"
                onClick={handleVisaConsultation}
                whileHover={BUTTON_HOVER}
                whileTap={BUTTON_TAP}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E2C56E] to-[#B89628] text-slate-950 font-bold text-xs sm:text-sm tracking-tight shadow-xl shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 cursor-pointer overflow-hidden"
              >
                {/* Continuous Gold Shimmer Effect */}
                {!shouldReduceMotion && (
                  <motion.div
                    animate={{ x: ['-100%', '250%'] }}
                    transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut', repeatDelay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none -skew-x-12"
                  />
                )}
                {/* Hover shine sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                <Icons.Sparkles className="w-4 h-4 text-slate-950 relative z-10" />
                <span className="relative z-10">Book Visa Consultation</span>
                <Icons.ArrowRight className="w-4 h-4 text-slate-950 stroke-[3] group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
              </motion.button>

              {/* Secondary CTA with lift */}
              <motion.button
                id="hero-explore-services-btn"
                onClick={handleExplore}
                whileHover={BUTTON_HOVER}
                whileTap={BUTTON_TAP}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0B1528]/90 hover:bg-[#12203D] border border-white/15 hover:border-[#D4AF37]/80 text-white font-semibold text-xs sm:text-sm tracking-tight backdrop-blur-md cursor-pointer transition-colors shadow-lg"
              >
                <span>Explore Services</span>
                <Icons.Briefcase className="w-4 h-4 text-[#D4AF37]" />
              </motion.button>

              {/* WhatsApp CTA with subtle breathing pulse */}
              <motion.a
                href={getWhatsAppUrl('visa')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        boxShadow: [
                          '0 0 0 rgba(16,185,129,0)',
                          '0 0 18px rgba(16,185,129,0.35)',
                          '0 0 0 rgba(16,185,129,0)',
                        ],
                      }
                }
                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                className="inline-flex items-center gap-2 px-4.5 py-3.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 hover:border-emerald-400 text-emerald-400 font-bold text-xs sm:text-sm tracking-tight backdrop-blur-md transition-colors"
              >
                <Icons.MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Desk</span>
              </motion.a>
            </motion.div>

            {/* 6. Credential Badges with Staggered Entrance */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.98, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/10 max-w-2xl"
            >
              <div className="flex items-center gap-2">
                <Icons.PhoneCall className="w-4 h-4 text-[#D4AF37] shrink-0 animate-pulse" />
                <a href="tel:+97168055093" className="text-xs text-slate-200 font-mono font-bold hover:text-[#D4AF37] transition-colors">
                  06 805 5093
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icons.ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-xs text-slate-300 font-medium">99.4% Approval</span>
              </div>
              <div className="flex items-center gap-2">
                <Icons.Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-xs text-slate-300 font-medium">24-48h Express</span>
              </div>
              <div className="flex items-center gap-2">
                <Icons.Building2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Ajman DED 140290</span>
              </div>
            </motion.div>
          </div>

          {/* 7. Right-Side Visual Card: opacity 0 -> 1, scale 0.92 -> 1, translateX(40px) -> 0 */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.42, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <Interactive3DLiveHero onOpenInquiry={onOpenInquiry} />

            {/* Floating Stats Strip with animated counters */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-[#0B1528]/90 border border-white/10 backdrop-blur-md shadow-2xl"
            >
              <div className="text-center">
                <span className="text-base sm:text-lg font-black text-[#D4AF37] font-sans">
                  <AnimatedCounter value={15000} suffix="+" duration={1.6} />
                </span>
                <p className="text-[10px] text-slate-400 font-medium">Visas Processed</p>
              </div>
              <div className="text-center border-x border-white/10">
                <span className="text-base sm:text-lg font-black text-white font-sans">
                  <AnimatedCounter value={500} suffix="+" duration={1.6} />
                </span>
                <p className="text-[10px] text-slate-400 font-medium">Corporate Clients</p>
              </div>
              <div className="text-center">
                <span className="text-base sm:text-lg font-black text-emerald-400 font-sans">
                  <AnimatedCounter value={100} suffix="%" duration={1.4} />
                </span>
                <p className="text-[10px] text-slate-400 font-medium">ICP Compliant</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Center Scroll Indicator (fade + bounce) */}
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.6 }}
        className="relative z-10 flex flex-col items-center justify-center pt-4 text-center"
      >
        <button
          onClick={handleExplore}
          className="group flex flex-col items-center gap-1 text-[10px] font-mono tracking-[0.25em] text-slate-400 hover:text-[#D4AF37] uppercase transition-colors cursor-pointer"
        >
          <span>EXPLORE SERVICES</span>
          <Icons.ChevronDown className="w-4 h-4 text-[#D4AF37] group-hover:translate-y-1.5 transition-transform duration-300 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
