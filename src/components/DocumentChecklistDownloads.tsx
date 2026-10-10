import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { BRANDING } from '../data/branding';

interface ChecklistGuide {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  authority: string;
  validity: string;
  items: { text: string; note: string; mandatory: boolean }[];
  officialTip: string;
}

const CHECKLIST_GUIDES: ChecklistGuide[] = [
  {
    id: 'golden-visa-checklist',
    category: '10-Year Golden Visa',
    title: 'UAE 10-Year Golden Visa Document Dossier',
    subtitle: 'Official ICP / GDRFA Compliance Checklist for Real Estate Investors & Entrepreneurs',
    authority: 'ICP & Dubai Land Department (DLD)',
    validity: '10 Years Renewable',
    items: [
      { text: 'Original Passport (Minimum 6 Months Validity)', note: 'Clear color scan of all informational and signature pages', mandatory: true },
      { text: 'Property Title Deed (AED 2M+ Value)', note: 'Issued by Dubai Land Dept or relevant emirate land registry', mandatory: true },
      { text: 'Current UAE Visa / Entry Permit Copy', note: 'If currently inside UAE (Visit Visa / Residence / Cancellation)', mandatory: true },
      { text: 'High-Resolution Digital Passport Photo', note: 'White background, 80% face coverage, studio quality', mandatory: true },
      { text: 'Health Insurance Certificate (VIP Comprehensive)', note: 'Can be issued by CORE LINK during medical processing', mandatory: true },
      { text: 'Bank Statement (Optional for Real Estate, Mandatory for Talent)', note: '6 Months stamped bank statement showing funds flow', mandatory: false }
    ],
    officialTip: 'Under the latest 2026 ICP executive regulations, mortgaged properties are fully eligible if bank NOC confirms AED 2M+ equity cleared.'
  },
  {
    id: 'mainland-llc-checklist',
    category: 'Mainland Business Setup',
    title: 'Dubai Mainland LLC Company Setup Checklist',
    subtitle: 'DET Dubai Department of Economy & Tourism Commercial Licensing Package',
    authority: 'DET Dubai & Ministry of Economy',
    validity: '1 Year Renewable License + 2Y Investor Visas',
    items: [
      { text: 'Passport Copies of All Shareholders & Managers', note: 'With entry stamp or existing Emirates ID copy', mandatory: true },
      { text: '3 Desired Trade Name Choices in Order of Preference', note: 'Must comply with DET naming guidelines', mandatory: true },
      { text: 'Selected Business Activities List', note: 'Commercial, professional, or industrial classifications', mandatory: true },
      { text: 'Signed Electronic Memorandum of Association (MoA)', note: 'Drafted in Arabic & English by CORE LINK legal desk', mandatory: true },
      { text: 'Commercial Tenancy Agreement (Ejari / Virtual Desk)', note: 'Sustainability / business center desk valid for license issuance', mandatory: true },
      { text: 'Initial Approval Certificate from DET', note: 'Generated within 1 hour by CORE LINK typing desk', mandatory: true }
    ],
    officialTip: '100% foreign ownership is available on 2,000+ commercial activities without requiring a local Emirati sponsor.'
  },
  {
    id: 'family-visa-checklist',
    category: 'Family & Dependent Visa',
    title: 'Spouse & Children Residence Visa Dossier',
    subtitle: 'GDRFA Amer Complete Sponsorship Document Requirements',
    authority: 'General Directorate of Residency and Foreigners Affairs (GDRFA)',
    validity: '2 Years (Linked to Sponsor Visa)',
    items: [
      { text: 'Original Marriage Certificate (MOFA Attested)', note: 'Attested by country of origin Embassy & UAE MOFA', mandatory: true },
      { text: 'Birth Certificates of Children (MOFA Attested)', note: 'Attested with sworn Ministry of Justice Arabic translation', mandatory: true },
      { text: 'Sponsor Original Emirates ID & Valid Visa Copy', note: 'Minimum salary threshold AED 4,000 or AED 3,000 + accommodation', mandatory: true },
      { text: 'Sponsor Official Salary Certificate / MOHRE Contract', note: 'Issued in Arabic for government Amer submission', mandatory: true },
      { text: 'Valid Ejari Tenancy Certificate (Attested Contract)', note: 'Under sponsor name confirming residential capacity', mandatory: true },
      { text: 'Recent 3-Month Bank Statement (Stamped)', note: 'Showing regular salary credit transactions', mandatory: true }
    ],
    officialTip: 'Sons are sponsor-able up to age 25, while unmarried daughters have no maximum age limit under UAE residency laws.'
  }
];

interface DocumentChecklistDownloadsProps {
  onOpenInquiry?: (serviceName: string) => void;
}

export const DocumentChecklistDownloads: React.FC<DocumentChecklistDownloadsProps> = ({ onOpenInquiry }) => {
  const [selectedGuideId, setSelectedGuideId] = useState<string>(CHECKLIST_GUIDES[0].id);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const activeGuide = CHECKLIST_GUIDES.find(g => g.id === selectedGuideId) || CHECKLIST_GUIDES[0];

  const toggleCheck = (idx: number) => {
    const key = `${activeGuide.id}-${idx}`;
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const checkedCount = activeGuide.items.filter((_, idx) => checkedItems[`${activeGuide.id}-${idx}`]).length;
  const progressPercent = Math.round((checkedCount / activeGuide.items.length) * 100);

  return (
    <section id="document-checklists" className="py-12 lg:py-16 bg-[#050B14] text-white relative border-t border-[#1E2E4A]/60 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-3">
            <Icons.FileCheck className="w-3.5 h-3.5" />
            REGULATORY DOSSIER CHECKLISTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-sans">
            Official UAE Document Checklists & Requirements
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Interactive document readiness audit. Check your requirements online, generate your customized dossier, or download the printable checklist.
          </p>
        </div>

        {/* Guide Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {CHECKLIST_GUIDES.map((guide) => {
            const isSelected = guide.id === activeGuide.id;
            return (
              <button
                key={guide.id}
                onClick={() => setSelectedGuideId(guide.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] text-[#050B14] shadow-lg shadow-[#D4AF37]/25 scale-105'
                    : 'bg-[#0B1528] border border-[#1E2E4A] text-slate-300 hover:text-white hover:bg-[#12203D]'
                }`}
              >
                <Icons.FileText className={`w-4 h-4 ${isSelected ? 'text-[#050B14]' : 'text-[#D4AF37]'}`} />
                <span>{guide.category}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Checklist Dashboard */}
        <div className="rounded-3xl bg-[#0B1528] border border-[#1E2E4A] p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Header Info */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1E2E4A]">
            <div className="space-y-1 max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-bold">
                {activeGuide.authority}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {activeGuide.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {activeGuide.subtitle}
              </p>
            </div>

            {/* Progress tracker widget */}
            <div className="p-4 rounded-2xl bg-[#050B14] border border-[#1E2E4A] min-w-[240px] space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400">Document Readiness:</span>
                <span className="text-[#D4AF37] font-bold">{progressPercent}% ({checkedCount}/{activeGuide.items.length})</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-emerald-400 transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Checklist Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeGuide.items.map((item, idx) => {
              const isChecked = !!checkedItems[`${activeGuide.id}-${idx}`];
              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 select-none ${
                    isChecked
                      ? 'bg-emerald-950/20 border-emerald-500/40 shadow-sm'
                      : 'bg-[#050B14] border-[#1E2E4A] hover:border-slate-600'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                      isChecked
                        ? 'bg-emerald-500 border-emerald-500 text-[#050B14]'
                        : 'border-slate-600 bg-[#0B1528]'
                    }`}
                  >
                    {isChecked && <Icons.Check className="w-4 h-4 stroke-[3]" />}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold ${isChecked ? 'text-emerald-300 line-through' : 'text-white'}`}>
                        {item.text}
                      </span>
                      {item.mandatory && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Official Tip Box */}
          <div className="p-4 rounded-2xl bg-[#050B14] border border-[#D4AF37]/30 flex items-start gap-3.5">
            <Icons.Sparkles className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase">2026 Core Link Advisory Tip:</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeGuide.officialTip}
              </p>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1E2E4A]">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              <span>Need help preparing or attesting missing documents? Our PRO team handles MOFA & legal translations.</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handlePrint}
                className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-[#050B14] border border-[#1E2E4A] hover:border-[#D4AF37] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Icons.Printer className="w-4 h-4 text-[#D4AF37]" />
                <span>Print Checklist</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenInquiry?.(`${activeGuide.title} (Dossier Review)`)}
                className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] hover:brightness-110 text-[#050B14] text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Icons.UploadCloud className="w-4 h-4" />
                <span>Submit Dossier for Free Audit</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
