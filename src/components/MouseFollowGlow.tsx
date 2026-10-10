import React, { useEffect, useRef, useState } from 'react';

export const MouseFollowGlow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const rafId = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if touch device or prefers reduced motion
    const touchQuery = window.matchMedia('(pointer: coarse)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (touchQuery.matches || motionQuery.matches) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);

    const onMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);

    // Smooth lerp loop updating CSS variables on container ref directly without setState
    const loop = () => {
      const lerpFactor = 0.12;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;

      if (containerRef.current) {
        containerRef.current.style.setProperty('--glow-x', `${currentPos.current.x.toFixed(1)}px`);
        containerRef.current.style.setProperty('--glow-y', `${currentPos.current.y.toFixed(1)}px`);
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!isSupported) return null;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 ease-out overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        // Default off-screen coordinates
        ['--glow-x' as any]: '-1000px',
        ['--glow-y' as any]: '-1000px',
      }}
      aria-hidden="true"
    >
      {/* Primary Gold / Warm Ambient Spotlight */}
      <div
        className="absolute rounded-full pointer-events-none will-change-transform"
        style={{
          width: '600px',
          height: '600px',
          transform: 'translate(calc(var(--glow-x) - 300px), calc(var(--glow-y) - 300px))',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.14) 0%, rgba(14, 26, 50, 0.06) 40%, transparent 70%)',
          filter: 'blur(20px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Secondary Soft Core Glow */}
      <div
        className="absolute rounded-full pointer-events-none will-change-transform"
        style={{
          width: '240px',
          height: '240px',
          transform: 'translate(calc(var(--glow-x) - 120px), calc(var(--glow-y) - 120px))',
          background: 'radial-gradient(circle, rgba(229, 195, 101, 0.2) 0%, rgba(212, 175, 55, 0.08) 50%, transparent 80%)',
          filter: 'blur(8px)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};

export default MouseFollowGlow;
