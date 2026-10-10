import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useReducedMotion, Variants } from 'motion/react';
import * as Icons from 'lucide-react';

/* =========================================================================
   GLOBAL MOTION EASING & TIMING CURVES (Apple / Premium Corporate Standard)
   ========================================================================= */

export const TRANSITION_SPRING = {
  type: 'spring' as const,
  stiffness: 260,
  damping: 20,
};

export const TRANSITION_SMOOTH = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const TRANSITION_SLOW = {
  duration: 0.85,
  ease: [0.16, 1, 0.3, 1] as const,
};

/* Viewport configuration for triggering animations reliably once visible */
export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.15,
  margin: '0px 0px -50px 0px',
};

/* =========================================================================
   REUSABLE ANIMATION VARIANTS (VISIBLE & TACTILE WITH REAL OFFSETS)
   ========================================================================= */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: TRANSITION_SMOOTH,
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer = (staggerDelay = 0.12, delayChildren = 0.05): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren,
      staggerChildren: staggerDelay,
    },
  },
});

/* Service Card Entrance Variant (Requested: opacity 0 -> 1, y: 50px -> 0, scale: 0.96 -> 1) */
export const cardEntrance: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Button hover & active interaction constants */
export const BUTTON_HOVER = {
  y: -3,
  scale: 1.02,
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
};

export const BUTTON_TAP = {
  scale: 0.97,
  transition: { duration: 0.15 },
};

export const CARD_HOVER = {
  y: -8,
  scale: 1.02,
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
};

export const CARD_3D_HOVER = {
  y: -8,
  scale: 1.02,
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
};

/* Section Heading Sequence (Label first, Heading second, Paragraph third) */
export const headingLabelVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const headingTitleVariant: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const headingDescVariant: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/* =========================================================================
   REUSABLE 3D TILT CARD COMPONENT (APPLE-INSPIRED SUBTLE PERSPECTIVE)
   ========================================================================= */

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  maxTilt?: number; // Maximum tilt in degrees (default 4.5deg)
  perspective?: number; // Perspective in px (default 1000)
  onClick?: () => void;
  id?: string;
}

export const TiltCard3D: React.FC<TiltCard3DProps> = ({
  children,
  className = '',
  containerClassName = '',
  maxTilt = 4.5,
  perspective = 1000,
  onClick,
  id,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [supportsHover, setSupportsHover] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia('(hover: hover) and (pointer: fine)');
      setSupportsHover(media.matches);
      const listener = (e: MediaQueryListEvent) => setSupportsHover(e.matches);
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !supportsHover || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const normalizedX = x / (rect.width / 2);
    const normalizedY = y / (rect.height / 2);

    // rotateX is inverted relative to Y movement
    const rotateX = -normalizedY * maxTilt;
    const rotateY = normalizedX * maxTilt;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    if (!shouldReduceMotion && supportsHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${containerClassName}`}
      style={{ perspective: `${perspective}px` }}
    >
      <motion.div
        animate={{
          rotateX: shouldReduceMotion ? 0 : tilt.x,
          rotateY: shouldReduceMotion ? 0 : tilt.y,
          y: isHovered ? -8 : 0,
          scale: isHovered ? 1.015 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
          mass: 0.5,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className={`w-full h-full ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

/* =========================================================================
   ANIMATED COUNTER (NUMBERS COUNT UP ON VIEWPORT TRIGGER)
   ========================================================================= */

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.6,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayCount(value);
      return;
    }

    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out expo for natural slowing
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = easeProgress * value;

      setDisplayCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setDisplayCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration, shouldReduceMotion]);

  const formattedValue = decimals > 0
    ? displayCount.toFixed(decimals)
    : Math.floor(displayCount).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};

/* =========================================================================
   ANIMATED SECTION HEADER (STAGGERED EYEBROW -> TITLE -> PARAGRAPH)
   ========================================================================= */

interface SectionHeaderProps {
  eyebrow: string;
  eyebrowIcon?: React.ReactNode;
  title: React.ReactNode;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : 'hidden'}
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.14,
          },
        },
      }}
      className={`${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-3xl'} ${className}`}
    >
      {/* 1. Small Label / Eyebrow badge: y: 20 -> 0 */}
      <motion.div
        variants={headingLabelVariant}
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-bold tracking-[0.2em] uppercase mb-3.5 shadow-sm ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        {eyebrowIcon || <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />}
        <span>{eyebrow}</span>
      </motion.div>

      {/* 2. Heading: y: 35 -> 0 */}
      <motion.h2
        variants={headingTitleVariant}
        className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.2] text-white font-sans"
      >
        {title}
      </motion.h2>

      {/* 3. Paragraph: y: 25 -> 0 */}
      {description && (
        <motion.p
          variants={headingDescVariant}
          className="mt-3.5 text-sm sm:text-base text-slate-300 font-normal leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};
