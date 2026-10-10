import React from 'react';
import * as Icons from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { IMAGES } from '../data/images';
import { VIEWPORT_CONFIG, fadeUp, fadeDown, staggerContainer, staggerItem } from '@/lib/animations';

export const WhyCoreLink: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const cards = [
    {
      title: 'UAE Expertise',
      description: 'Deep knowledge of UAE administrative procedures and official ministries.',
      icon: Icons.ShieldCheck,
    },
    {
      title: 'Professional Processing',
      description: 'Accurate, managed application handling with guaranteed compliance.',
      icon: Icons.Cog,
    },
    {
      title: 'Business Support',
      description: 'Corporate and partner-friendly retainers tailored for growth.',
      icon: Icons.Briefcase,
    },
    {
      title: 'International Network',
      description: 'Global visa assistance across Schengen, UK, US and 50+ destinations.',
      icon: Icons.Globe,
    },
  ];

  return (
    <section className="relative bg-[#050B14] py-12 lg:py-16 text-white overflow-hidden">
      
      {/* Background Corporate Team Photo Overlay */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity pointer-events-none">
        <img
          src={IMAGES.businessMeetingBg}
          alt="Business Meeting"
          loading="lazy"
          decoding="async"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] via-[#050B14]/85 to-[#050B14] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Eyebrow & Title */}
        <motion.div
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="mb-10 max-w-2xl"
        >
          <motion.div
            variants={fadeDown}
            className="inline-block text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-3 bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20"
          >
            WHY CORE LINK
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans leading-[1.1]"
          >
            One Partner.<br />
            <span className="text-[#D4AF37]">Multiple Solutions.</span>
          </motion.h2>
        </motion.div>

        {/* 4 Feature Cards Grid with Stagger */}
        <motion.div
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          variants={staggerContainer(0.12, 0.05)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="rounded-3xl bg-[#0B1528]/80 backdrop-blur-md border border-white/10 p-7 sm:p-8 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)] hover:-translate-y-2 cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#141F33] border border-white/10 group-hover:border-[#D4AF37]/60 group-hover:scale-105 flex items-center justify-center text-[#D4AF37] transition-all duration-300 mb-6">
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-sans tracking-tight mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyCoreLink;
