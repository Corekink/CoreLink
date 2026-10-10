import React, { useState, useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { IMAGES } from '../data/images';

interface Interactive3DLiveHeroProps {
  onOpenInquiry?: (serviceName?: string) => void;
}

export const Interactive3DLiveHero: React.FC<Interactive3DLiveHeroProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'golden-visa' | 'tasheel' | 'ded-license' | 'salem-medical'>('golden-visa');
  const [rotation, setRotation] = useState({ x: 3, y: -4 });
  const [isHovered, setIsHovered] = useState(false);
  const [counter, setCounter] = useState(15842);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle live counter increment simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + (Math.random() > 0.6 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Apple-style subtle mouse tilt (max 4.5 degrees)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateY = (x / (rect.width / 2)) * 4.5;
    const rotateX = -(y / (rect.height / 2)) * 4.5;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 2, y: -3 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full select-none"
      style={{ perspective: '1200px' }}
    >
      {/* Ambient background glow behind 3D object */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37]/15 via-blue-600/10 to-transparent rounded-[36px] blur-2xl pointer-events-none opacity-70" />

      {/* Floating 3D Stamp Badge Top-Right (Elevated on Z-Axis) */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8, y: -20, x: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-5 -right-3 sm:-right-5 z-40 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#0B1528]/95 border border-[#D4AF37]/60 shadow-[0_15px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        style={{
          transform: shouldReduceMotion ? 'none' : 'translateZ(40px)',
        }}
      >
        <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#D4AF37] to-[#B89628] flex items-center justify-center text-slate-950 shadow-sm shrink-0">
          <Icons.ShieldCheck className="w-4 h-4 stroke-[2.5]" />
        </div>
        <div>
          <div className="text-[10px] font-mono font-bold text-[#D4AF37] tracking-wider uppercase leading-none">
            ICP & GDRFA VERIFIED
          </div>
          <div className="text-[9px] text-slate-300 font-medium mt-0.5 leading-none">
            Federal Ministry Clearance
          </div>
        </div>
      </motion.div>

      {/* Floating SLA Badge Bottom-Left (Elevated on Z-Axis) */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8, y: 20, x: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
        transition={{ delay: 0.85, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-4 -left-3 sm:-left-5 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#070D18]/95 border border-emerald-500/40 shadow-[0_12px_28px_rgba(0,0,0,0.7)] backdrop-blur-xl"
        style={{
          transform: shouldReduceMotion ? 'none' : 'translateZ(35px)',
        }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wide">
          24H EXPRESS SLA ACTIVE
        </span>
      </motion.div>

      {/* Main 3D Card Object (Hero Focal Element with Smooth Floating Idle) */}
      <motion.div
        initial={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 0, scale: 0.88, y: 30, rotateY: 8 }
        }
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : {
                opacity: 1,
                scale: 1,
                y: [0, -5, 0],
                rotateX: rotation.x,
                rotateY: rotation.y,
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0.5 }
            : {
                opacity: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                y: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
                rotateX: { type: 'spring', stiffness: 220, damping: 20 },
                rotateY: { type: 'spring', stiffness: 220, damping: 20 },
              }
        }
        style={{
          transformStyle: 'preserve-3d',
        }}
        className="relative rounded-[26px] p-[1.5px] bg-gradient-to-b from-white/20 via-[#D4AF37]/30 to-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
      >
        {/* Inner Glass Layer */}
        <div className="relative rounded-[24px] bg-[#070E1A]/95 backdrop-blur-2xl p-5 sm:p-7 overflow-hidden border border-white/5">
          
          {/* Subtle background graphic & gradient shine */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Header Strip */}
          <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#D4AF37] to-[#B89628] p-0.5 shadow-md shadow-[#D4AF37]/25 shrink-0">
                <div className="w-full h-full bg-[#050B14] rounded-[10px] flex items-center justify-center text-[#D4AF37]">
                  <Icons.Cpu className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-black tracking-tight text-white font-sans">
                    UAE CLEARANCE ENGINE
                  </h4>
                  <span className="px-2 py-0.5 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[9.5px] font-mono font-bold text-[#D4AF37]">
                    DIRECT PORTAL
                  </span>
                </div>
                <p className="text-[10.5px] text-slate-400 font-mono flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>GDRFA · ICP · MOHRE Direct Stream</span>
                </p>
              </div>
            </div>

            <div className="text-right">
              <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Live Stamped</div>
              <div className="text-sm sm:text-base font-black text-[#D4AF37] font-mono">
                {counter.toLocaleString()}+
              </div>
            </div>
          </div>

          {/* Channel Selector Pills */}
          <div className="relative z-10 grid grid-cols-4 gap-1.5 my-4 p-1 rounded-2xl bg-white/[0.03] border border-white/10">
            {[
              { id: 'golden-visa', label: '10Y Golden', icon: Icons.Award, color: 'text-[#D4AF37]' },
              { id: 'tasheel', label: 'Tasheel Quota', icon: Icons.Briefcase, color: 'text-blue-400' },
              { id: 'ded-license', label: 'DET License', icon: Icons.Building2, color: 'text-emerald-400' },
              { id: 'salem-medical', label: 'VIP Salem', icon: Icons.HeartPulse, color: 'text-rose-400' },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-2 px-1 rounded-xl text-center flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#D4AF37] to-[#A38120] text-slate-950 font-bold shadow-md shadow-[#D4AF37]/30 scale-[1.03]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-slate-950 stroke-[2.5]' : tab.color}`} />
                  <span className="text-[10px] tracking-tight truncate w-full">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Panel per Selected Channel */}
          <div className="relative z-10 rounded-2xl bg-[#0B1528]/80 border border-white/10 p-4 sm:p-5 shadow-inner">
            
            {activeTab === 'golden-visa' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                      <Icons.ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Federal Golden Visa Dossier</div>
                      <div className="text-[10px] text-slate-400 font-mono">ICP Nomination & Property Title Verification</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    99.4% CLEAR
                  </span>
                </div>

                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[10px] font-mono text-slate-300">
                    <span>ICP Direct Nomination Protocol</span>
                    <span className="text-[#D4AF37] font-bold">100% Validated</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden p-0.5 border border-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-amber-300 w-full" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                  <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-1.5 text-slate-300">
                    <Icons.Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>No Local Sponsor Needed</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-1.5 text-slate-300">
                    <Icons.Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>100% Family Inclusion</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tasheel' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                      <Icons.Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">MOHRE Electronic Work Permit</div>
                      <div className="text-[10px] text-slate-400 font-mono">Quota Allocation & E-Contract Generation</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/30">
                    24H EXPRESS
                  </span>
                </div>

                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[10px] font-mono text-slate-300">
                    <span>Tasheel Establishment Card Sync</span>
                    <span className="text-blue-400 font-bold">ONLINE</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden p-0.5 border border-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-400 w-[88%]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                  <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-1.5 text-slate-300">
                    <Icons.Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Offer Letter Stamping</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-1.5 text-slate-300">
                    <Icons.Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Labor Card Clearance</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ded-license' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Icons.Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Mainland Trade License</div>
                      <div className="text-[10px] text-slate-400 font-mono">DET Dubai & Mainland MoA Registration</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    INSTANT DED
                  </span>
                </div>

                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[10px] font-mono text-slate-300">
                    <span>Initial Approval & Trade Name</span>
                    <span className="text-emerald-400 font-bold">READY</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden p-0.5 border border-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[95%]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                  <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-1.5 text-slate-300">
                    <Icons.Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>100% Foreign Ownership</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-1.5 text-slate-300">
                    <Icons.Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Bank Account Support</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'salem-medical' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                      <Icons.HeartPulse className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">VIP Salem Medical & ID</div>
                      <div className="text-[10px] text-slate-400 font-mono">DHA 2-Hour Express Result Schedule</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/30">
                    2-HOUR VIP
                  </span>
                </div>

                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[10px] font-mono text-slate-300">
                    <span>Smart Biometric Appointment</span>
                    <span className="text-rose-400 font-bold">CONFIRMED</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden p-0.5 border border-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-rose-500 to-amber-400 w-[92%]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                  <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-1.5 text-slate-300">
                    <Icons.Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>VIP Lounge Access</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-1.5 text-slate-300">
                    <Icons.Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Doorstep ID Delivery</span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Action Trigger Buttons */}
          <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onOpenInquiry?.(`Fast-Track ${activeTab.toUpperCase()} Clearance`)}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89628] hover:from-[#E5C365] hover:to-[#D4AF37] text-slate-950 font-bold text-xs tracking-tight shadow-lg shadow-[#D4AF37]/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Icons.Sparkles className="w-3.5 h-3.5" />
              <span>Launch Rapid Filing Desk</span>
            </button>

            <div className="px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-[10px] font-mono text-[#D4AF37] shrink-0 text-center">
              <span className="block font-bold">24H SLA</span>
              <span className="text-[8.5px] text-slate-400">Guaranteed</span>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
