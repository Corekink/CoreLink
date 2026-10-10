import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { IMAGES } from '../data/images';
import { VIEWPORT_CONFIG, fadeUp, fadeDown, staggerContainer, staggerItem } from '@/lib/animations';

export const ServiceProcess: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'Initial consultation & requirement understanding.',
      img: IMAGES.consultation,
    },
    {
      num: '02',
      title: 'Document Review',
      desc: 'Verification of submitted documents.',
      img: IMAGES.documentReview,
    },
    {
      num: '03',
      title: 'Application',
      desc: 'Preparation and typing of application forms.',
      img: IMAGES.applicationPreparation,
    },
    {
      num: '04',
      title: 'Processing',
      desc: 'Submission to the relevant authority.',
      img: IMAGES.submissionFiling,
    },
    {
      num: '05',
      title: 'Status Update',
      desc: 'Tracking and timely updates.',
      img: IMAGES.statusUpdates,
    },
    {
      num: '06',
      title: 'Completion',
      desc: 'Delivery of the final processed service.',
      img: IMAGES.doorstepCompletion,
    },
  ];

  // Interactive slider state for Before / After
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section className="bg-white py-12 lg:py-16 relative text-slate-900 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Top Header: 6-Step Workflow */}
        <motion.div
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <motion.div
            variants={fadeDown}
            className="flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-3"
          >
            <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
            HOW IT WORKS
            <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-sans"
          >
            Our Service Process
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-sm sm:text-base text-slate-600 font-normal"
          >
            A transparent, six-step workflow from your first consultation to the completed service.
          </motion.p>
        </motion.div>

        {/* 6 Steps Row with connecting track & staggered entrance */}
        <motion.div
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          variants={staggerContainer(0.1, 0.05)}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12 relative"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="flex flex-col items-center text-center relative group cursor-pointer"
            >
              {/* Thumbnail with Golden Step Badge */}
              <div className="relative w-full h-24 sm:h-28 rounded-2xl overflow-hidden bg-slate-900 shadow-md mb-3.5 border border-slate-100 group-hover:border-[#D4AF37]/60 group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                
                {/* Number Badge */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#D4AF37] text-slate-950 font-black text-xs flex items-center justify-center font-mono shadow-md group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
              </div>

              {/* Step Title & Subtitle */}
              <h4 className="text-sm font-bold text-slate-900 font-sans mb-1 group-hover:text-[#b58b3c] transition-colors">
                {step.title}
              </h4>
              <p className="text-[11px] text-slate-500 leading-tight">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section: From Documents to Done (Interactive Slider) */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="pt-8 border-t border-slate-100"
        >
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-3">
              <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
              THE PROCESS
              <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-sans">
              From Documents to Done
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
              Drag the slider to see how CORE LINK transforms scattered paperwork into a completed official document.
            </p>
          </div>

          {/* Interactive Before / After Slider */}
          <div className="max-w-4xl mx-auto">
            <div
              className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-slate-200"
              onMouseMove={(e) => isDragging && handleSliderMove(e)}
              onTouchMove={(e) => handleSliderMove(e)}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onClick={handleSliderMove}
            >
              {/* "After" Image (Right: Approved Stamped Passport & Clearance) */}
              <img
                src={IMAGES.approvedPassportStamped}
                alt="Approved Visa & Golden Emirates Clearance"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-5 px-3 py-1 rounded-full bg-emerald-600/90 text-white text-xs font-bold font-mono tracking-wider uppercase shadow-md">
                AFTER: APPROVED & PROCESSED
              </div>

              {/* "Before" Image (Left: Raw Complex Paperwork) clipped by slider */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={IMAGES.scatteredPaperwork}
                  alt="Raw Scattered Documents"
                  className="absolute inset-0 h-full object-cover max-w-none"
                  style={{ width: '100%', minWidth: '896px' }}
                />
                <div className="absolute top-4 left-5 px-3 py-1 rounded-full bg-black/80 text-amber-300 text-xs font-bold font-mono tracking-wider uppercase shadow-md">
                  BEFORE: RAW DOCUMENTATION
                </div>
              </div>

              {/* Divider Line & Handle */}
              <div
                className="absolute inset-y-0 w-1 bg-white shadow-2xl pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#D4AF37] text-black font-bold flex items-center justify-center shadow-2xl border-2 border-white text-xs">
                  ⇄
                </div>
              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
