import React from 'react';
import * as Icons from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { IMAGES } from '@/data/images';
import {
  VIEWPORT_CONFIG,
  headingLabelVariant,
  headingTitleVariant,
  headingDescVariant,
  staggerContainer,
  cardEntrance,
  TiltCard3D,
} from '@/lib/animations';

export const HowCoreLinkWorks: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'We understand your requirements and assess official eligibility.',
      icon: Icons.UserCheck,
      image: IMAGES.consultation,
    },
    {
      num: '02',
      title: 'Document Review',
      desc: 'Our certified team reviews and verifies all required documents.',
      icon: Icons.FileSearch,
      image: IMAGES.documentReview,
    },
    {
      num: '03',
      title: 'Application Preparation',
      desc: 'Forms and electronic files are drafted with zero-error assurance.',
      icon: Icons.FileEdit,
      image: IMAGES.applicationPreparation,
    },
    {
      num: '04',
      title: 'Submission & Filing',
      desc: 'Direct ministerial lodgement with ICP, GDRFA, MOHRE & DED.',
      icon: Icons.Send,
      image: IMAGES.submissionFiling,
    },
    {
      num: '05',
      title: 'Status Updates',
      desc: 'Real-time tracking and WhatsApp updates throughout the cycle.',
      icon: Icons.Clock,
      image: IMAGES.statusUpdates,
    },
    {
      num: '06',
      title: 'Doorstep Completion',
      desc: 'Final doorstep delivery of stamped visas and trade licenses.',
      icon: Icons.CheckCircle2,
      image: IMAGES.doorstepCompletion,
    },
  ];

  return (
    <section className="bg-[#050B14] py-16 lg:py-24 relative text-white border-t border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-48 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header with Sequential Stagger */}
        <motion.div
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={headingLabelVariant}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-bold tracking-[0.25em] uppercase mb-3 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span>OUR VERIFIED PROCESS</span>
          </motion.div>

          <motion.h2
            variants={headingTitleVariant}
            className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans"
          >
            How CORE LINK Works
          </motion.h2>

          <motion.p
            variants={headingDescVariant}
            className="mt-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            A clear, transparent six-step visual roadmap guiding every engagement from first consultation to certified completion.
          </motion.p>
        </motion.div>

        {/* 6 Connected Steps Diagram with animated track */}
        <div className="relative">
          {/* Animated horizontal track across desktop */}
          <motion.div
            initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="hidden lg:block absolute top-16 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent z-0 pointer-events-none"
          />

          {/* Steps Grid with Strong Stagger */}
          <motion.div
            initial={shouldReduceMotion ? {} : 'hidden'}
            whileInView="visible"
            viewport={VIEWPORT_CONFIG}
            variants={staggerContainer(0.12, 0.08)}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10"
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardEntrance}
                  className="h-full"
                >
                  <TiltCard3D maxTilt={4} containerClassName="h-full" className="h-full">
                    <div className="group relative h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#0C1527] to-[#070D18] border border-white/10 hover:border-[#D4AF37] p-4 transition-colors duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_15px_35px_rgba(212,175,55,0.2)] cursor-pointer">
                      
                      {/* Step Work Photo with hover scale */}
                      <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 bg-slate-900 border border-white/10">
                        <img
                          src={step.image}
                          alt={step.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-transparent" />
                        
                        {/* Step Number Badge */}
                        <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-[#050B14]/90 border border-[#D4AF37]/50 flex items-center justify-center text-xs font-bold font-mono text-[#D4AF37] shadow-md group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-300">
                          {step.num}
                        </div>

                        {/* Step Icon Badge */}
                        <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-lg bg-[#050B14]/90 border border-white/20 flex items-center justify-center text-[#D4AF37] shadow-md group-hover:scale-110 transition-transform">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-1.5 text-left flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-[#D4AF37] uppercase font-semibold">STAGE {step.num}</span>
                          <h4 className="text-sm font-bold text-white font-sans tracking-tight group-hover:text-[#D4AF37] transition-colors mt-0.5">
                            {step.title}
                          </h4>
                          <p className="text-xs text-slate-400 font-normal leading-relaxed mt-1">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </TiltCard3D>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HowCoreLinkWorks;
