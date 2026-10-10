import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { VIEWPORT_CONFIG } from '@/lib/animations';

interface MotionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none' | 'scale';
  duration?: number;
  id?: string;
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  id,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  const getInitialOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 32, opacity: 0 };
      case 'down':
        return { y: -24, opacity: 0 };
      case 'left':
        return { x: 35, opacity: 0 };
      case 'right':
        return { x: -35, opacity: 0 };
      case 'scale':
        return { scale: 0.94, opacity: 0 };
      case 'none':
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      id={id}
      initial={getInitialOffset()}
      whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      viewport={VIEWPORT_CONFIG}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionStaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  id?: string;
}> = ({ children, className = '', staggerDelay = 0.1, delayChildren = 0.05, id }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div id={id} className={className}>{children}</div>;
  }

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionStaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = '', id }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div id={id} className={className}>{children}</div>;
  }

  return (
    <motion.div
      id={id}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
