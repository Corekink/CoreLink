import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { getWhatsAppUrl } from '@/data/branding';

interface FloatingWhatsAppProps {
  currentService?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentService }) => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappLink = getWhatsAppUrl(currentService || 'general');
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      id="floating-whatsapp-container"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8, y: 25 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
    >
      {/* Tooltip Pill / Label */}
      <motion.div
        initial={{ opacity: 0, x: 12, scale: 0.95 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : 12,
          scale: isHovered ? 1 : 0.95,
          pointerEvents: isHovered ? 'auto' : 'none',
        }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="hidden sm:flex items-center gap-2 bg-[#0B1528]/95 text-white border border-[#D4AF37]/40 shadow-2xl py-2 px-3.5 rounded-full text-xs font-semibold backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Chat with CORE LINK on WhatsApp</span>
      </motion.div>

      {/* Floating Button with Subtle Breathing Pulse */}
      <motion.a
        id="floating-whatsapp-btn"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with CORE LINK Administrative Services on WhatsApp (+971 56 805 5093)"
        title="Chat on WhatsApp (+971 56 805 5093)"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.04, 1],
                boxShadow: [
                  '0 10px 25px rgba(16,185,129,0.35)',
                  '0 12px 35px rgba(16,185,129,0.55)',
                  '0 10px 25px rgba(16,185,129,0.35)',
                ],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 3.2,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center border-2 border-white/25 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Soft Halo Wave */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/25 animate-ping pointer-events-none opacity-60" />

        {/* WhatsApp Icon */}
        <Icons.MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 fill-current stroke-emerald-500 group-hover:scale-105 transition-transform" />

        {/* Small Active Online Dot */}
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#050B14] border-2 border-emerald-500 flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
        </span>
      </motion.a>
    </motion.div>
  );
};

export default FloatingWhatsApp;
