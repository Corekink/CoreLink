import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { BRANDING, getWhatsAppUrl } from '../data/branding';
import {
  VIEWPORT_CONFIG,
  headingLabelVariant,
  headingTitleVariant,
  headingDescVariant,
  cardEntrance,
  BUTTON_HOVER,
  BUTTON_TAP,
} from '@/lib/animations';

interface TrackingResult {
  refNumber: string;
  applicantName: string;
  serviceType: string;
  authority: string;
  submissionDate: string;
  estimatedCompletion: string;
  status: 'In Progress' | 'Approved' | 'Awaiting Biometrics' | 'Issued';
  currentStepIndex: number;
  steps: { title: string; description: string; date: string; done: boolean }[];
}

const REGISTERED_CLIENT_DOSSIERS: Record<string, TrackingResult> = {
  'CL-88291': {
    refNumber: 'CL-88291',
    applicantName: 'M. Al-Hashimi (Investor)',
    serviceType: '10-Year UAE Golden Visa (ICP Direct)',
    authority: 'Federal Authority for Identity & Citizenship (ICP)',
    submissionDate: '2026-08-21',
    estimatedCompletion: '2026-08-24',
    status: 'In Progress',
    currentStepIndex: 2,
    steps: [
      { title: 'Application Typed & Fee Cleared', description: 'ICP Portal Reference generated & nomination vetted.', date: 'Aug 21, 2026 - 10:15 AM', done: true },
      { title: 'Initial Approval Granted', description: 'Security verification and Title Deed validation completed.', date: 'Aug 22, 2026 - 02:40 PM', done: true },
      { title: 'VIP Salem Medical & Biometrics', description: 'VIP slot booked at Al Nahda Center. Results pending upload.', date: 'Aug 23, 2026 - In Progress', done: false },
      { title: 'Digital E-Residency & EID Issuance', description: '10-Year Electronic Residency Stamping & Card dispatch.', date: 'Expected: Aug 24, 2026', done: false }
    ]
  },
  'CL-40921': {
    refNumber: 'CL-40921',
    applicantName: 'Apex Dynamics FZCO',
    serviceType: 'Dubai Mainland LLC Trade License + MoA',
    authority: 'Dubai Economy and Tourism (DET)',
    submissionDate: '2026-08-20',
    estimatedCompletion: '2026-08-22',
    status: 'Approved',
    currentStepIndex: 3,
    steps: [
      { title: 'Initial Approval & Name Reservation', description: 'Trade name certified & commercial activities confirmed.', date: 'Aug 20, 2026 - 09:30 AM', done: true },
      { title: 'Court MoA & Notary Notarization', description: 'Sworn electronic legal translation and signatory e-sign.', date: 'Aug 20, 2026 - 03:15 PM', done: true },
      { title: 'Ejari Tenancy Registration', description: 'Virtual desk / sustainability commercial Ejari verified.', date: 'Aug 21, 2026 - 11:00 AM', done: true },
      { title: 'Trade License Voucher Dispatched', description: 'Full commercial license released with 3 Investor Visa quotas.', date: 'Aug 22, 2026 - Completed', done: true }
    ]
  }
};

const OFFICIAL_GOV_PORTALS = [
  {
    authority: 'ICP Smart Services (Federal UAE)',
    forEmirates: 'Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, UAQ & Golden Visa',
    url: 'https://smartservices.icp.gov.ae',
    requiredInfo: 'Passport No + Nationality + DOB or ICP Application Request Number',
    icon: Icons.ShieldCheck,
    badge: 'Federal Authority'
  },
  {
    authority: 'GDRFA Dubai / Amer Portal',
    forEmirates: 'Dubai Residence Visa, Entry Permits & Tourist Extensions',
    url: 'https://www.gdrfad.gov.ae/en/services/e-services',
    requiredInfo: 'Application No + Transaction No + Year (or Passport Inquiry)',
    icon: Icons.Building2,
    badge: 'Dubai Government'
  },
  {
    authority: 'MOHRE (Ministry of Human Resources)',
    forEmirates: 'Work Permits, Labor Contracts & Employment Quotas',
    url: 'https://www.mohre.gov.ae/en/services/inquiry-services.aspx',
    requiredInfo: 'MB / Transaction Number or Passport & Nationality',
    icon: Icons.Briefcase,
    badge: 'Ministry of Human Resources'
  },
  {
    authority: 'DET Dubai Commercial Registry',
    forEmirates: 'Mainland Trade License Status & Commercial MoA',
    url: 'https://eservices.dubaided.gov.ae',
    requiredInfo: 'Trade License No / Initial Approval No / Reserved Name',
    icon: Icons.FileText,
    badge: 'Economy & Tourism'
  }
];

interface VisaStatusTrackerProps {
  onOpenInquiry?: (serviceName: string) => void;
}

export const VisaStatusTracker: React.FC<VisaStatusTrackerProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'cl_track' | 'gov_portals' | 'how_it_works'>('cl_track');
  const [inputRef, setInputRef] = useState('');
  const [searchedData, setSearchedData] = useState<TrackingResult | null>(null);
  const [notFoundRef, setNotFoundRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setNotFoundRef(null);
    setSearchedData(null);
    const cleanRef = inputRef.trim().toUpperCase();

    if (!cleanRef) {
      setErrorMsg('Please enter your CORE LINK Reference Number (e.g. CL-88291)');
      return;
    }

    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
      if (REGISTERED_CLIENT_DOSSIERS[cleanRef]) {
        setSearchedData(REGISTERED_CLIENT_DOSSIERS[cleanRef]);
        setNotFoundRef(null);
      } else {
        // Transparent: Not in local CORE LINK dossier database, show verified guidance and direct lookup
        setNotFoundRef(cleanRef);
        setSearchedData(null);
      }
    }, 450);
  };

  const loadSample = (code: string) => {
    setInputRef(code);
    setNotFoundRef(null);
    setSearchedData(REGISTERED_CLIENT_DOSSIERS[code]);
    setErrorMsg('');
  };

  return (
    <section id="visa-status-tracker" className="py-12 lg:py-16 bg-[#070E1A] text-white relative border-t border-[#1E2E4A]/60 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

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
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <motion.div
            variants={headingLabelVariant}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-3"
          >
            <Icons.Radar className="w-3.5 h-3.5 animate-pulse" />
            OFFICIAL APPLICATION & DOSSIER TRACKER
          </motion.div>
          <motion.h2
            variants={headingTitleVariant}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-sans"
          >
            Track UAE Visa, PRO & Trade License Status
          </motion.h2>
          <motion.p
            variants={headingDescVariant}
            className="mt-3 text-sm sm:text-base text-slate-300"
          >
            Check your CORE LINK client reference milestone, or access direct government portals (ICP, GDRFA, MOHRE) with official PRO assistance.
          </motion.p>
        </motion.div>

        {/* Navigation Tabs with Hover & Tap */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-10"
        >
          <motion.button
            onClick={() => { setActiveTab('cl_track'); }}
            whileHover={BUTTON_HOVER}
            whileTap={BUTTON_TAP}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'cl_track'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] text-[#050B14] shadow-lg shadow-[#D4AF37]/25'
                : 'bg-[#0B1528] border border-[#1E2E4A] text-slate-300 hover:text-white'
            }`}
          >
            <Icons.Search className="w-4 h-4" />
            <span>CORE LINK Client Tracker</span>
          </motion.button>

          <motion.button
            onClick={() => setActiveTab('gov_portals')}
            whileHover={BUTTON_HOVER}
            whileTap={BUTTON_TAP}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'gov_portals'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] text-[#050B14] shadow-lg shadow-[#D4AF37]/25'
                : 'bg-[#0B1528] border border-[#1E2E4A] text-slate-300 hover:text-white'
            }`}
          >
            <Icons.ExternalLink className="w-4 h-4 text-[#D4AF37]" />
            <span>Direct Government Portals (ICP / GDRFA)</span>
          </motion.button>

          <motion.button
            onClick={() => setActiveTab('how_it_works')}
            whileHover={BUTTON_HOVER}
            whileTap={BUTTON_TAP}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'how_it_works'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] text-[#050B14] shadow-lg shadow-[#D4AF37]/25'
                : 'bg-[#0B1528] border border-[#1E2E4A] text-slate-300 hover:text-white'
            }`}
          >
            <Icons.HelpCircle className="w-4 h-4 text-[#D4AF37]" />
            <span>How Tracking Works in UAE</span>
          </motion.button>
        </motion.div>

        {/* Tab 1: CORE LINK Reference Lookup */}
        {activeTab === 'cl_track' && (
          <div className="space-y-8">
            <div className="max-w-3xl mx-auto">
              <div className="p-4 sm:p-5 rounded-3xl bg-[#0B1528] border border-[#1E2E4A] shadow-2xl">
                <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Icons.Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={inputRef}
                      onChange={(e) => setInputRef(e.target.value)}
                      placeholder="Enter CORE LINK Ref (e.g. CL-88291, CL-40921)..."
                      className="w-full pl-11 pr-4 py-3.5 bg-[#050B14] border border-[#1E2E4A] rounded-2xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all font-mono"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] hover:brightness-110 text-[#050B14] font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                  >
                    {isSearching ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#050B14] border-t-transparent rounded-full animate-spin" />
                        <span>Searching...</span>
                      </>
                    ) : (
                      <>
                        <Icons.Compass className="w-4 h-4" />
                        <span>Check Status</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Quick Sample Ref Buttons */}
                <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-[#1E2E4A]/60 text-xs text-slate-400 font-mono">
                  <span>Registered Client Examples:</span>
                  <button
                    type="button"
                    onClick={() => loadSample('CL-88291')}
                    className="px-2.5 py-1 rounded-lg bg-[#050B14] border border-[#1E2E4A] hover:border-[#D4AF37] hover:text-[#D4AF37] text-slate-300 transition-all text-[11px] cursor-pointer"
                  >
                    CL-88291 (Golden Visa)
                  </button>
                  <button
                    type="button"
                    onClick={() => loadSample('CL-40921')}
                    className="px-2.5 py-1 rounded-lg bg-[#050B14] border border-[#1E2E4A] hover:border-[#D4AF37] hover:text-[#D4AF37] text-slate-300 transition-all text-[11px] cursor-pointer"
                  >
                    CL-40921 (Mainland LLC)
                  </button>
                </div>

                {errorMsg && (
                  <div className="mt-3 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <Icons.AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Found Record Timeline Display */}
            {searchedData && (
              <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#0B1528] to-[#050B14] border border-[#D4AF37]/50 p-6 sm:p-10 shadow-2xl space-y-8 animate-fadeIn">
                {/* Demo / Sample Disclaimer Banner */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                  <Icons.AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-200 leading-relaxed">
                    <strong className="text-amber-300 uppercase tracking-wider block font-mono text-[11px] mb-1">
                      Sample Demonstration Dossier (Illustrative Workflow)
                    </strong>
                    This timeline demonstrates how CORE LINK structures multi-tier government clearances. Actual government processing status is verified live through direct ICP/GDRFA back-office links. Please confirm official status with your assigned PRO advisor.
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#1E2E4A]">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-bold">
                        SAMPLE REF #{searchedData.refNumber}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                        Sample Milestone: {searchedData.status}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {searchedData.serviceType}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Applicant: <strong className="text-slate-200">{searchedData.applicantName}</strong> | Authority: <strong className="text-slate-200">{searchedData.authority}</strong>
                    </p>
                  </div>

                  <div className="text-left md:text-right space-y-1">
                    <div className="text-xs text-slate-400 font-mono">Sample SLA Timeline</div>
                    <div className="text-base font-bold text-[#D4AF37] font-mono">
                      {searchedData.estimatedCompletion}
                    </div>
                  </div>
                </div>

                {/* Milestone Progress */}
                <div className="space-y-6">
                  <h4 className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-bold">
                    OFFICIAL DOSSIER MILESTONE CLEARANCE
                  </h4>

                  <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#1E2E4A]">
                    {searchedData.steps.map((step, idx) => {
                      const isCurrent = idx === searchedData.currentStepIndex;
                      const isDone = step.done;

                      return (
                        <div key={idx} className="relative group">
                          <div
                            className={`absolute -left-6 sm:-left-8 top-0.5 w-5 sm:w-7 h-5 sm:h-7 rounded-full flex items-center justify-center transition-all ${
                              isDone
                                ? 'bg-emerald-500 text-[#050B14] shadow-md shadow-emerald-500/30'
                                : isCurrent
                                ? 'bg-[#D4AF37] text-[#050B14] shadow-lg shadow-[#D4AF37]/50 ring-4 ring-[#D4AF37]/20 animate-pulse'
                                : 'bg-[#0B1528] border border-slate-600 text-slate-500'
                            }`}
                          >
                            {isDone ? (
                              <Icons.Check className="w-3.5 h-3.5 stroke-[3]" />
                            ) : isCurrent ? (
                              <Icons.Clock className="w-3.5 h-3.5 stroke-[2.5]" />
                            ) : (
                              <span className="text-[10px] font-bold">{idx + 1}</span>
                            )}
                          </div>

                          <div className="p-4 rounded-2xl bg-[#050B14]/80 border border-[#1E2E4A] space-y-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <h5 className={`text-sm font-bold ${isCurrent ? 'text-[#D4AF37]' : isDone ? 'text-white' : 'text-slate-400'}`}>
                                {step.title}
                              </h5>
                              <span className="text-[11px] font-mono text-slate-400">
                                {step.date}
                              </span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Advisor & WhatsApp Link */}
                <div className="p-5 rounded-2xl bg-[#050B14] border border-[#1E2E4A] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-300 text-center sm:text-left space-y-0.5">
                    <span className="font-bold text-white block">Need Official Verification for Ref #{searchedData.refNumber}?</span>
                    <span className="text-slate-400">Connect with an accredited CORE LINK PRO to audit your live government record.</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                    {onOpenInquiry && (
                      <button
                        onClick={() => onOpenInquiry(`Verify Status for Ref ${searchedData.refNumber} (${searchedData.serviceType})`)}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:brightness-110 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      >
                        <Icons.UserCheck className="w-3.5 h-3.5" />
                        <span>Confirm with Advisor</span>
                      </button>
                    )}
                    <a
                      href={`https://wa.me/${BRANDING.whatsappNumber}?text=${encodeURIComponent(`Hello CORE LINK, please verify my actual application status for ref: ${searchedData.refNumber}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold text-xs transition-all flex items-center justify-center gap-2"
                    >
                      <Icons.MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp PRO Desk</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* If NOT FOUND: Honest & Helpful Guidance Screen */}
            {notFoundRef && (
              <div className="max-w-4xl mx-auto rounded-3xl bg-[#0B1528] border border-amber-500/40 p-6 sm:p-10 shadow-2xl space-y-6 animate-fadeIn">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Icons.FileQuestion className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 text-[11px] font-mono font-bold">
                      REF / PASSPORT NOT FOUND IN INTERNAL CLIENT REGISTER
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Reference &quot;{notFoundRef}&quot; is not an active CORE LINK Client Code
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      If this is an external UAE government application (e.g. from Amer, ICP, or another typing center), you can check it directly on the official government portals below or have our PRO desk verify it for you immediately.
                    </p>
                  </div>
                </div>

                {/* Two Action Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-[#050B14] border border-[#1E2E4A] space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#D4AF37]">
                      <Icons.ExternalLink className="w-4 h-4" />
                      <span>Check On Government Portal</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Use the official ICP Federal Smart Services (smartservices.icp.gov.ae) or GDRFA Dubai portal to check by passport number.
                    </p>
                    <button
                      onClick={() => setActiveTab('gov_portals')}
                      className="w-full py-2.5 rounded-xl bg-[#0B1528] border border-[#1E2E4A] hover:border-[#D4AF37] text-white text-xs font-bold transition-all cursor-pointer"
                    >
                      Open Official Government Portals &rarr;
                    </button>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#050B14] border border-emerald-500/30 space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-emerald-400">
                      <Icons.MessageSquare className="w-4 h-4" />
                      <span>Instant PRO Official Verification</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Send reference &quot;{notFoundRef}&quot; directly to CORE LINK PRO. We will run an official system check on the UAE immigration network.
                    </p>
                    <a
                      href={`https://wa.me/${BRANDING.whatsappNumber}?text=${encodeURIComponent(`Hello CORE LINK PRO, please verify my UAE application/passport number: ${notFoundRef}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Check via WhatsApp PRO Desk</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Direct Government Portals */}
        {activeTab === 'gov_portals' && (
          <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn">
            <div className="p-4 rounded-2xl bg-[#0B1528] border border-[#1E2E4A] text-xs sm:text-sm text-slate-300 flex items-center gap-3">
              <Icons.Info className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <span>
                These are the <strong>Official UAE Federal & Dubai Government Public Inquiries</strong>. You can check any visa, trade license, or labor contract directly through their verified secure servers.
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {OFFICIAL_GOV_PORTALS.map((portal, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-[#0B1528] border border-[#1E2E4A] hover:border-[#D4AF37]/50 transition-all space-y-4 shadow-xl">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-mono font-bold uppercase">
                        {portal.badge}
                      </span>
                      <h4 className="text-base font-bold text-white mt-1">
                        {portal.authority}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {portal.forEmirates}
                      </p>
                    </div>
                    <portal.icon className="w-6 h-6 text-[#D4AF37] shrink-0" />
                  </div>

                  <div className="p-3 rounded-xl bg-[#050B14] border border-[#1E2E4A] text-xs space-y-1">
                    <span className="text-slate-400 font-mono block text-[11px]">Required for Lookup:</span>
                    <span className="text-slate-200 font-medium">{portal.requiredInfo}</span>
                  </div>

                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] hover:brightness-110 text-[#050B14] font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#D4AF37]/20"
                  >
                    <span>Visit Official Portal</span>
                    <Icons.ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: How Tracking Works Explained */}
        {activeTab === 'how_it_works' && (
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#0B1528] border border-[#1E2E4A] p-6 sm:p-10 shadow-2xl space-y-8 animate-fadeIn">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-bold">
                PRO EDUCATIONAL GUIDE
              </span>
              <h3 className="text-2xl font-bold text-white">
                How Application Tracking Actually Functions in the UAE
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                In the United Arab Emirates, visa and commercial processing is divided between federal and emirate-level government entities. Here is how your reference numbers work:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#050B14] border border-[#1E2E4A] space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold font-mono text-sm">
                  1
                </div>
                <h4 className="text-sm font-bold text-white">CORE LINK Dossier Reference</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  When you submit your application through CORE LINK, you receive a client reference (e.g. <code>CL-88291</code>) which links all legal typing, translation, and PRO steps in one place.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#050B14] border border-[#1E2E4A] space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold font-mono text-sm">
                  2
                </div>
                <h4 className="text-sm font-bold text-white">Government Request (ICP / GDRFA)</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Upon electronic submission, the government generates an official Application Number (e.g. <code>2026/1234567</code>) or Unified Number (UID) for immigration tracking.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#050B14] border border-[#1E2E4A] space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-bold font-mono text-sm">
                  3
                </div>
                <h4 className="text-sm font-bold text-white">Direct PRO Desk Check</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  If you have an external reference or passport number, our certified PROs can look up the exact government clearance status via official back-office portals.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#050B14] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-300 text-center sm:text-left">
                <span className="font-bold text-white block">Have an unverified application or passport?</span>
                <span className="text-slate-400">Our PRO team will run an authorized audit on the UAE registry for you.</span>
              </div>
              <a
                href={getWhatsAppUrl('visa-status')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <Icons.MessageSquare className="w-3.5 h-3.5" />
                <span>Contact PRO Desk</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

