import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  VIEWPORT_CONFIG,
  headingLabelVariant,
  headingTitleVariant,
  headingDescVariant,
  staggerContainer,
  cardEntrance,
} from '@/lib/animations';

interface FaqSectionProps {
  onOpenInquiry?: (service?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenInquiry }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      q: 'Who qualifies for the 10-Year UAE Golden Visa and what is the processing time?',
      a: 'Investors with real estate worth AED 2M+, entrepreneurs, PhD holders, executive managers (earning AED 30,000+ basic salary), specialized medical doctors, engineers, and creative talents. Through our fast-track ICP & GDRFA channel, federal nomination and visa issuance take 5 to 10 working days.',
      tag: 'Golden Visa',
    },
    {
      q: 'Can I set up a 100% foreign-owned Mainland LLC in Dubai without a local sponsor?',
      a: 'Yes! Under UAE Commercial Companies Law, foreign investors and expats can now own 100% of most commercial and industrial activities on Dubai Mainland through the Department of Economy and Tourism (DET) without requiring an Emirati partner.',
      tag: 'Company Setup',
    },
    {
      q: 'How fast can I get a Residence Visa stamped after entering the UAE?',
      a: 'With our VIP Express typing desk and fast-track Salem Medical appointment, the complete cycle (Entry Permit -> Change of Status -> VIP Medical & Biometrics -> GDRFA Stamping -> Emirates ID) can be finalized in 2 to 4 working days.',
      tag: 'Residency Visa',
    },
    {
      q: 'What documents require MOFA Attestation before UAE visa or business filing?',
      a: 'Foreign educational degrees, marriage certificates, birth certificates, and corporate Powers of Attorney (PoA) must be notarized in the home country, attested by the UAE Embassy abroad, and finally stamped by the UAE Ministry of Foreign Affairs (MOFA) along with certified Arabic legal translation.',
      tag: 'Attestation',
    },
    {
      q: 'What is an Ejari certificate, and why is it mandatory for trade licenses?',
      a: 'Ejari is the official Dubai Land Department (DLD) tenancy registration system. An active Ejari or accredited business center sustainability contract is mandatory for obtaining or renewing any Dubai Mainland commercial trade license and issuing employee visas.',
      tag: 'Ejari & Property',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#050B14] relative overflow-hidden border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header with Sequential Stagger */}
        <motion.div
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.14 } },
          }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <motion.div
            variants={headingLabelVariant}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 shadow-sm"
          >
            <Icons.HelpCircle className="w-4 h-4 text-[#D4AF37]" />
            // FREQUENTLY ASKED QUESTIONS
          </motion.div>
          <motion.h2
            variants={headingTitleVariant}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans text-white tracking-tight"
          >
            Government Regulations & <span className="text-[#D4AF37]">Clearance FAQs</span>
          </motion.h2>
          <motion.p
            variants={headingDescVariant}
            className="text-slate-400 text-sm sm:text-base"
          >
            Essential answers to common questions regarding UAE immigration, company formation, and document attestation.
          </motion.p>
        </motion.div>

        {/* Accordion List with Staggered Entrance */}
        <motion.div
          initial={shouldReduceMotion ? {} : 'hidden'}
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          variants={staggerContainer(0.1, 0.05)}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={cardEntrance}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-gradient-to-r from-[#0E1626] to-[#0A1120] border-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.15)]'
                    : 'bg-[#0B1528]/80 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-md border border-[#D4AF37]/20 shrink-0">
                      {faq.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white font-sans">
                      {faq.q}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#D4AF37] text-slate-950' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <Icons.ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -8, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5"
                      >
                        <p>{faq.a}</p>
                        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400 font-mono">Need more personalized advice?</span>
                          <button
                            type="button"
                            onClick={() => onOpenInquiry?.(faq.q)}
                            className="text-xs font-bold text-[#D4AF37] hover:text-[#e4be6b] flex items-center gap-1 cursor-pointer transition-colors group"
                          >
                            <span>Ask our VIP Advisor</span>
                            <Icons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                          </button>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default FaqSection;
