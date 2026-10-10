import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
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

interface ServiceOption {
  id: string;
  category: string;
  name: string;
  typicalSla: string;
  govEntity: string;
  estimatedFee: string;
  documentsNeeded: string[];
}

interface ServiceCostCalculatorProps {
  onOpenInquiry?: (serviceName: string) => void;
}

export const ServiceCostCalculator: React.FC<ServiceCostCalculatorProps> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('residency');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('golden-visa');
  const [applicantCount, setApplicantCount] = useState<number>(1);
  const [isVipExpress, setIsVipExpress] = useState<boolean>(false);

  const categories = [
    { id: 'residency', label: 'UAE Visas & Residency', icon: Icons.FileCheck },
    { id: 'corporate', label: 'Business Setup & PRO', icon: Icons.Building2 },
    { id: 'attestation', label: 'Legal & Attestation', icon: Icons.FileCheck },
    { id: 'schengen', label: 'International Visas', icon: Icons.Globe },
  ];

  const services: Record<string, ServiceOption[]> = {
    residency: [
      {
        id: 'golden-visa',
        category: 'residency',
        name: '10-Year Golden Visa (Property, Investor & Talent)',
        typicalSla: '48 - 72 Hours',
        govEntity: 'GDRFA / ICP Federal',
        estimatedFee: 'Custom Quotation',
        documentsNeeded: ['Passport copy', 'Title Deed / Bank Statement', 'Emirates ID', 'Personal Photo']
      },
      {
        id: 'investor-visa',
        category: 'residency',
        name: '2-Year Investor / Partner Residence Visa',
        typicalSla: '24 - 48 Hours',
        govEntity: 'DET / GDRFA Amer',
        estimatedFee: 'Standard Government Rates',
        documentsNeeded: ['Trade License Copy', 'MoA / Share Certificate', 'Passport Copy', 'Photo (White BG)']
      },
      {
        id: 'family-visa',
        category: 'residency',
        name: 'Family & Dependent Visa Stamping (Spouse & Children)',
        typicalSla: '24 - 48 Hours',
        govEntity: 'Amer / ICP',
        estimatedFee: 'Transparent Amer Tariff',
        documentsNeeded: ['Attested Marriage/Birth Certificate', 'Salary Certificate / Labour Contract', 'Ejari Tenancy', 'Passports']
      },
      {
        id: 'salem-medical',
        category: 'residency',
        name: 'VIP Salem Medical Fitness & Emirates ID Typing',
        typicalSla: '2 - 4 Hours Express',
        govEntity: 'DHA Salem & ICP',
        estimatedFee: 'Gov Typing & VIP Fee',
        documentsNeeded: ['Original Passport / Entry Permit', 'Active Phone Number', 'Current Visa Copy']
      }
    ],
    corporate: [
      {
        id: 'llc-setup',
        category: 'corporate',
        name: 'Dubai Mainland LLC Commercial Trade License',
        typicalSla: '24 Hours Instant DED',
        govEntity: 'DET Dubai Economy',
        estimatedFee: 'Complete Package Quotation',
        documentsNeeded: ['Passport copies of all shareholders', '3 Preferred Trade Names', 'Activity List']
      },
      {
        id: 'freezone-setup',
        category: 'corporate',
        name: 'UAE Free Zone Turnkey Company Incorporation',
        typicalSla: '2 - 3 Working Days',
        govEntity: 'IFZA / Meydan / DMCC',
        estimatedFee: 'Free Zone Fee + Visa Allocation',
        documentsNeeded: ['Passport & Visa Copy', 'Address Proof', 'Business Profile']
      },
      {
        id: 'pro-retainer',
        category: 'corporate',
        name: 'Corporate PRO & Tasheel Monthly Retainer Desk',
        typicalSla: 'Dedicated PRO Executive',
        govEntity: 'MOHRE / DET / GDRFA',
        estimatedFee: 'Monthly / Per-Transaction Model',
        documentsNeeded: ['Establishment Card', 'Trade License', 'E-Signature Card']
      },
      {
        id: 'license-renewal',
        category: 'corporate',
        name: 'Trade License Renewal & Ejari Attestation',
        typicalSla: 'Same-Day Clearance',
        govEntity: 'DET & Dubai Land Dept',
        estimatedFee: 'DED Renewal Voucher + Typing',
        documentsNeeded: ['Current Trade License', 'Valid Ejari Tenancy', 'Partners Passport Copies']
      }
    ],
    attestation: [
      {
        id: 'mofa-attestation',
        category: 'attestation',
        name: 'MOFA Degree & Certificate Consular Attestation',
        typicalSla: 'Same-Day / 24 Hours',
        govEntity: 'MOFAIC UAE',
        estimatedFee: 'Standard MOFA Tariff + Courier',
        documentsNeeded: ['Original Degree / Certificate', 'Home Country Apostille / Embassy Stamp', 'Passport Copy']
      },
      {
        id: 'legal-translation',
        category: 'attestation',
        name: 'Sworn Arabic Legal Translation (Ministry of Justice)',
        typicalSla: 'Instant / 4 Hours',
        govEntity: 'Ministry of Justice UAE',
        estimatedFee: 'Per-Page Certified Rate',
        documentsNeeded: ['Clear Scan of Original Document in PDF']
      },
      {
        id: 'notary-poa',
        category: 'attestation',
        name: 'Power of Attorney (PoA) & MoA Dubai Courts Notary',
        typicalSla: '24 Hours',
        govEntity: 'Dubai Courts Notary Public',
        estimatedFee: 'Court Notarization Fee',
        documentsNeeded: ['Draft Document', 'Emirates ID of Principal & Agent', 'Trade License if Corporate']
      }
    ],
    schengen: [
      {
        id: 'schengen-appointment',
        category: 'schengen',
        name: 'Schengen & Europe Tourist Visa Dossier & Booking',
        typicalSla: 'Immediate Dossier Prep',
        govEntity: 'VFS Global / TLScontact / BLS',
        estimatedFee: 'Consultancy & Dossier Typing',
        documentsNeeded: ['UAE Residence Visa (min 3 months validity)', 'Bank Statement (3-6 months)', 'NOC Letter from Employer', 'Passport (min 6 months)']
      },
      {
        id: 'uk-us-visa',
        category: 'schengen',
        name: 'UK Standard Visitor & US B1/B2 Visa Filing',
        typicalSla: 'Full Application Review',
        govEntity: 'UKVI / US Dept of State',
        estimatedFee: 'Embassy Portal Filing Fee',
        documentsNeeded: ['DS-160 / UK Form Details', 'Financial Documents', 'Travel History']
      }
    ]
  };

  const currentServices = services[selectedCategory] || services.residency;
  const currentService = currentServices.find(s => s.id === selectedServiceId) || currentServices[0];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="instant-quote" className="bg-[#0A1120] py-16 lg:py-24 relative text-white border-t border-white/10 overflow-hidden">
      {/* Decorative Radial Glows */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

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
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            variants={headingLabelVariant}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-3"
          >
            <Icons.Calculator className="w-3.5 h-3.5" />
            INSTANT ESTIMATOR & APPOINTMENT BOOKING
          </motion.div>
          <motion.h2
            variants={headingTitleVariant}
            className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans"
          >
            Calculate Timelines & Book Your Service
          </motion.h2>
          <motion.p
            variants={headingDescVariant}
            className="mt-3 text-sm sm:text-base text-slate-300 font-normal"
          >
            Choose your required UAE government or international service to verify the official authority, SLA turnaround, and required documentation.
          </motion.p>
        </motion.div>

        {/* Interactive Estimator / Booking Card */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#0E1626] to-[#050B14] p-6 sm:p-10 shadow-2xl"
        >
          
          {/* Step 1: Category Selector */}
          <div className="mb-8">
            <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-slate-950 flex items-center justify-center text-[11px] font-bold">1</span>
              Select Service Department:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setSelectedServiceId(services[cat.id][0].id);
                    }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-[#D4AF37] text-slate-950 border-[#D4AF37] shadow-lg font-bold'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-slate-950' : 'text-[#D4AF37]'}`} />
                    <span className="text-xs sm:text-sm">{cat.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Service Selection & Options */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-white/10">
            
            {/* Service Chooser & Modifiers */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-slate-950 flex items-center justify-center text-[11px] font-bold">2</span>
                  Choose Specific Transaction:
                </div>
                <div className="space-y-2.5">
                  {currentServices.map((srv) => {
                    const isSelected = srv.id === currentService.id;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => setSelectedServiceId(srv.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                          isSelected
                            ? 'bg-white/10 border-[#D4AF37] shadow-md ring-1 ring-[#D4AF37]'
                            : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/5'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="text-sm font-bold text-white flex items-center gap-2">
                            <span>{srv.name}</span>
                          </div>
                          <div className="text-xs text-slate-400 font-mono">
                            Authority: <strong className="text-slate-300">{srv.govEntity}</strong>
                          </div>
                        </div>
                        <div className="text-right shrink-0 pl-3">
                          <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 block">
                            {srv.typicalSla}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Number of Applicants & Express Add-on */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                    Number of Applicants / Visas:
                  </label>
                  <div className="flex items-center gap-3">
                    {[1, 2, 3, '4+'].map((num, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setApplicantCount(typeof num === 'number' ? num : 4)}
                        className={`w-10 h-10 rounded-xl border text-xs font-bold transition-all ${
                          (typeof num === 'number' && applicantCount === num) || (num === '4+' && applicantCount >= 4)
                            ? 'bg-[#D4AF37] text-slate-950 border-[#D4AF37]'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div
                  onClick={() => setIsVipExpress(!isVipExpress)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    isVipExpress
                      ? 'bg-amber-500/15 border-amber-400'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Icons.Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>VIP Express Priority Desk</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      Expedited same-day processing with dedicated PRO officer.
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${isVipExpress ? 'bg-[#D4AF37] border-[#D4AF37]' : 'border-white/30'}`}>
                    {isVipExpress && <Icons.Check className="w-3.5 h-3.5 text-slate-950" />}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Summary Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#D4AF37]/40 bg-gradient-to-b from-[#131E35] to-[#0A1120] p-6 sm:p-7 space-y-5 shadow-2xl relative">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider font-bold">ESTIMATED SUMMARY</span>
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-bold">
                        Sample Estimate
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mt-1">{currentService.name}</h4>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
                    <Icons.FileCheck2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Government Authority:</span>
                    <strong className="text-white font-mono">{currentService.govEntity}</strong>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Standard Turnaround (SLA):</span>
                    <strong className="text-emerald-400 font-mono">{currentService.typicalSla}</strong>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Priority Channel:</span>
                    <strong className={isVipExpress ? 'text-[#D4AF37] font-mono' : 'text-slate-400 font-mono'}>
                      {isVipExpress ? 'VIP Fast-Track Active' : 'Standard Regular'}
                    </strong>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Applicants / Units:</span>
                    <strong className="text-white font-mono">{applicantCount} {applicantCount > 1 ? 'Files' : 'File'}</strong>
                  </div>
                </div>

                {/* Required Documents Checklist */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <div className="text-[11px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-1.5">
                    <Icons.AlertCircle className="w-3.5 h-3.5" />
                    Required Documents Checklist:
                  </div>
                  <ul className="space-y-1.5">
                    {currentService.documentsNeeded.map((doc, idx) => (
                      <li key={idx} className="text-[11.5px] text-slate-300 flex items-start gap-2">
                        <span className="text-[#D4AF37] font-bold mt-0.5">•</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Regulatory Disclaimer Banner */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] text-slate-400 leading-relaxed flex items-start gap-2">
                  <Icons.ShieldAlert className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>
                    <strong>Disclaimer:</strong> Calculations and SLAs are preliminary estimates. Sovereign fees and approval durations vary by company jurisdiction, legal activity, and immigration quota. Confirm your case specifics with an advisor.
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={() => onOpenInquiry?.(`${currentService.name} - Confirm Estimate with Advisor (${applicantCount} Applicant${applicantCount > 1 ? 's' : ''}${isVipExpress ? ', VIP Express' : ''})`)}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] hover:brightness-110 text-[#050B14] font-black text-sm shadow-xl shadow-[#D4AF37]/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Icons.CheckCircle className="w-4 h-4" />
                    <span>Confirm Estimate with an Advisor</span>
                  </button>

                  <a
                    href={getWhatsAppUrl(currentService.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <Icons.MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Confirm on WhatsApp Desk</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
