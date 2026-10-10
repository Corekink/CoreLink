import React from 'react';
import * as Icons from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { AnimatedCounter, VIEWPORT_CONFIG, staggerContainer } from '@/lib/animations';

export const StatsBar: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const stats = [
    {
      numericValue: 12,
      suffix: '+',
      label: 'Years of UAE Expertise',
      sublabel: 'Ajman & Dubai Operations',
      icon: Icons.Building2,
    },
    {
      numericValue: 50,
      suffix: '+',
      label: 'Visa Destinations',
      sublabel: 'Global Diplomatic Clearance',
      icon: Icons.Plane,
    },
    {
      numericValue: 5000,
      suffix: '+',
      label: 'Applications Processed',
      sublabel: 'Zero-Error Ministerial Filing',
      icon: Icons.FileCheck2,
    },
    {
      numericValue: 300,
      suffix: '+',
      label: 'Business Partners',
      sublabel: 'Enterprise Retainers & SMEs',
      icon: Icons.Users,
    },
  ];

  return (
    <section className="bg-[#050B14] py-10 sm:py-14 relative z-20 overflow-hidden border-t border-b border-white/10">
      {/* Background radial ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          variants={staggerContainer(0.12, 0.05)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 35, scale: 0.96 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -6, scale: 1.015 }}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0C1527] to-[#070D18] border border-white/10 hover:border-[#D4AF37]/60 p-5 sm:p-6 transition-all duration-300 shadow-xl hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)] cursor-default overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle gold highlight line at top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 group-hover:via-[#D4AF37] to-transparent transition-all duration-500" />
                
                {/* Soft ambient radial spot */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#D4AF37]/10 rounded-full blur-xl group-hover:bg-[#D4AF37]/20 transition-all duration-500 pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                    METRIC // 0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight leading-none group-hover:text-[#D4AF37] transition-colors">
                    <AnimatedCounter
                      value={stat.numericValue}
                      suffix={stat.suffix}
                      duration={1.6}
                    />
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-2 tracking-tight">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 font-normal mt-0.5">
                    {stat.sublabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
