import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { SERVICES_LIST } from '../data/servicesData';
import { BRANDING, getWhatsAppUrl } from '../data/branding';
import { toast } from './ui/toaster';

interface ContactSectionProps {
  initialService?: string;
  currentLang?: string;
  onSelectService?: (serviceName: string) => void;
}

interface StagedFile {
  file: File;
  name: string;
  size: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'UAE Visa & Immigration',
}) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [serviceRequired, setServiceRequired] = useState(initialService);
  const [message, setMessage] = useState('');
  const [stagedFiles, setStagedFiles] = useState<StagedFile[]>([]);
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Sync initialService if prop changes
  React.useEffect(() => {
    if (initialService) {
      setServiceRequired(initialService);
    }
  }, [initialService]);

  const handleFileChange = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
    const maxSizeBytes = 5 * 1024 * 1024; // 5MB

    const newFiles: StagedFile[] = [];
    let rejectedCount = 0;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (stagedFiles.length + newFiles.length >= 5) {
        toast({
          title: 'Maximum Files Reached',
          description: 'You can attach up to 5 documents per inquiry. Additional documents can be shared via WhatsApp.',
          variant: 'default',
        });
        break;
      }

      if (!allowedTypes.includes(file.type)) {
        rejectedCount++;
        continue;
      }

      if (file.size > maxSizeBytes) {
        toast({
          title: 'File Too Large',
          description: `"${file.name}" exceeds the 5MB limit. Please compress it or send via WhatsApp.`,
          variant: 'destructive',
        });
        continue;
      }

      newFiles.push({
        file,
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      });
    }

    if (rejectedCount > 0) {
      toast({
        title: 'Unsupported File Format',
        description: 'Only PDF, JPG, and PNG documents are accepted.',
        variant: 'destructive',
      });
    }

    if (newFiles.length > 0) {
      setStagedFiles((prev) => [...prev, ...newFiles]);
      toast({
        title: 'Documents Attached',
        description: `${newFiles.length} file(s) attached to your inquiry. They will be submitted directly to our PRO team.`,
        variant: 'default',
      });
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files);
  };

  const removeFile = (index: number) => {
    const fileToRemove = stagedFiles[index];
    setStagedFiles((prev) => prev.filter((_, i) => i !== index));
    if (fileToRemove) {
      toast({
        title: 'File Removed',
        description: `"${fileToRemove.name}" has been removed from attachments.`,
        variant: 'default',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !mobileNumber.trim()) {
      toast({
        title: 'Missing Required Information',
        description: 'Please provide both your Full Name and Mobile / WhatsApp Number for dispatch.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('fullName', fullName.trim());
      formData.append('phone', mobileNumber.trim());
      formData.append('mobileNumber', mobileNumber.trim());
      formData.append('email', email.trim());
      formData.append('service', serviceRequired.trim());
      formData.append('notes', message.trim());
      formData.append('source', 'Contact Section Form');
      formData.append('website', honeypot);

      // Append files
      stagedFiles.forEach((sf) => {
        formData.append('documents', sf.file);
      });

      const response = await fetch('/api/inquiry', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Server rejected application submission.');
      }

      setIsSuccess(true);
      toast({
        title: 'Inquiry Successfully Transmitted',
        description: data.message || `Thank you, ${fullName}. Your inquiry for ${serviceRequired} has been logged with CORE LINK Administrative Services.`,
        variant: 'success',
      });
    } catch (err: any) {
      console.warn('[Contact Section Notice]', err?.message || err);
      toast({
        title: 'Transmission Notice',
        description: err.message || 'We could not send your inquiry right now. Please contact us on WhatsApp +971 56 805 5093 or call 06 805 5093.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-[#080B11] relative z-20 border-t border-[#D4AF37]/20" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Cards & Trust */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">24/7 EXECUTIVE LIAISON DESK</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-2 leading-tight">
                Connect Directly With CORE LINK
              </h2>
              <p className="text-slate-300 font-light mt-4 leading-relaxed">
                Visit our Ajman headquarters or submit your inquiry online. Attach copies of passports, licenses, or visas for swift assessment by our certified PRO team.
              </p>
            </div>

            {/* Direct Phone, Landline & WhatsApp Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href="tel:+97168055093"
                className="p-5 rounded-3xl bg-gradient-to-br from-[#0E1420] to-[#1A2333] border border-[#D4AF37]/50 shadow-xl group hover:border-[#D4AF37] transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    <Icons.PhoneCall className="w-5 h-5 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded font-bold">AJMAN HQ</span>
                </div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Office Landline</span>
                <span className="text-xl font-black text-white group-hover:text-[#D4AF37] transition-colors font-mono">06 805 5093</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">+971 6 805 5093</span>
              </a>

              <a
                href="tel:+971568055093"
                className="p-5 rounded-3xl bg-gradient-to-br from-[#0E1420] to-[#131D2E] border border-blue-500/40 shadow-xl group hover:border-blue-400 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-2xl bg-blue-500/15 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Icons.PhoneCall className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded font-bold">MOBILE HOTLINE</span>
                </div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Direct Mobile</span>
                <span className="text-xl font-black text-white group-hover:text-blue-400 transition-colors font-mono">056 805 5093</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">+971 56 805 5093</span>
              </a>

              <a
                href={getWhatsAppUrl('vip-liaison')}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:col-span-2 p-5 rounded-3xl bg-gradient-to-br from-[#0E1420] to-[#0A2619] border border-emerald-500/40 shadow-xl group hover:border-emerald-400 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-3 rounded-2xl bg-emerald-500/15 text-emerald-400 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <Icons.MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded font-bold">INSTANT RESPONSE</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">WhatsApp VIP Liaison Desk</span>
                    <span className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors">Chat on WhatsApp (+971 56 805 5093)</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold font-mono">wa.me/971568055093 ›</span>
                </div>
              </a>
            </div>

            {/* Email Directory */}
            <div className="space-y-3">
              <div className="p-5 rounded-2xl bg-[#0E1420] border border-slate-800/80 shadow-xl flex items-center gap-4 group hover:border-[#D4AF37]/50 transition-colors">
                <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                  <Icons.Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400">Official Administration & General Inquiries</span>
                  <a href={`mailto:sales@corelinkservices.ae`} className="block text-sm font-bold text-white hover:text-[#D4AF37] transition-colors">
                    sales@corelinkservices.ae <span className="text-slate-400 font-normal">/</span> info@corelinkservices.ae
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0E1420] border border-slate-800/80 shadow-xl flex items-center gap-4 group hover:border-emerald-500/50 transition-colors">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Icons.Headset className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400">24/7 Customer Support</span>
                  <a href={`mailto:${BRANDING.emails.support}`} className="block text-sm font-bold text-white hover:text-emerald-400 transition-colors">
                    {BRANDING.emails.support}
                  </a>
                </div>
              </div>
            </div>

            {/* Quality & Direct Liaison Guarantee */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#D4AF37]/15 to-transparent border border-[#D4AF37]/30 flex items-center gap-4">
              <Icons.ShieldCheck className="w-10 h-10 text-[#D4AF37] shrink-0" />
              <p className="text-xs text-slate-200 leading-relaxed">
                <strong className="text-[#D4AF37]">Confidentiality Guarantee:</strong> All inquiries and uploaded identification documents are securely handled exclusively by our authorized UAE government liaison consultants.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form & Real Uploader */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1420] border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
              
              {isSuccess ? (
                <div className="py-16 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
                    <Icons.Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black text-white">Application Received</h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <strong className="text-[#D4AF37]">{fullName}</strong>. Your inquiry for <strong className="text-white">{serviceRequired}</strong> has been transmitted to our sales and PRO desk. We will reach your contact number <strong className="text-[#D4AF37]">{mobileNumber}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFullName('');
                      setMobileNumber('');
                      setEmail('');
                      setMessage('');
                      setStagedFiles([]);
                    }}
                    className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#1E2E4A] text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-xl hover:scale-105 transition-transform cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Invisible Honeypot */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
                  
                  <div className="border-b border-slate-800 pb-6">
                    <h3 className="text-2xl sm:text-3xl font-black text-white">Direct Service Inquiry Desk</h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">Submit your requirements or attach document copies for assessment.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-2">
                        Full Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Mohammed Al Maktoum"
                        className="w-full px-4 py-3.5 bg-[#080B11] border border-slate-700 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label htmlFor="mobileNumber" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-2">
                        Mobile Number (WhatsApp) <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        id="mobileNumber"
                        type="tel"
                        required
                        disabled={isSubmitting}
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="e.g. 0568055093 or +971 56 805 5093"
                        className="w-full px-4 py-3.5 bg-[#080B11] border border-slate-700 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        id="email"
                        type="email"
                        disabled={isSubmitting}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="client@domain.com"
                        className="w-full px-4 py-3.5 bg-[#080B11] border border-slate-700 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label htmlFor="serviceRequired" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-2">
                        Service Required <span className="text-[#D4AF37]">*</span>
                      </label>
                      <select
                        id="serviceRequired"
                        disabled={isSubmitting}
                        value={serviceRequired}
                        onChange={(e) => setServiceRequired(e.target.value)}
                        className="w-full px-4 py-3.5 bg-[#080B11] border border-slate-700 rounded-2xl text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50"
                      >
                        {SERVICES_LIST.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#080B11] text-white">
                            {s.title} {s.badge ? `(${s.badge})` : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-2">
                      Special Instructions / Notes (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      disabled={isSubmitting}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe visa nationality, family members count, or trade license requirements..."
                      className="w-full px-4 py-3 bg-[#080B11] border border-slate-700 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50"
                    ></textarea>
                  </div>

                  {/* DOCUMENT UPLOAD (Real attachments + WhatsApp Alternative) */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#D4AF37] font-bold mb-1.5 flex items-center justify-between">
                      <span>Attach Documents (Optional)</span>
                      <span className="text-[10px] text-slate-400">PDF, JPG, PNG (Max 5MB each, up to 5 files)</span>
                    </label>

                    <div
                      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={handleDrop}
                      className={`relative border-2 border-dashed rounded-3xl p-6 text-center transition-all duration-300 cursor-pointer ${
                        isDragging
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 scale-[1.01]'
                          : 'border-slate-700 bg-[#080B11]/80 hover:border-slate-500 hover:bg-[#080B11]'
                      }`}
                    >
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.png,.jpg,.jpeg"
                        disabled={isSubmitting}
                        onChange={(e) => handleFileChange(e.target.files)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        title="Upload Documents"
                      />
                      <Icons.CloudUpload className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                      <p className="text-xs sm:text-sm font-bold text-white">
                        Click or drag & drop documents here
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Files are directly attached to your email submission.
                      </p>
                    </div>

                    {/* WhatsApp share note */}
                    <div className="mt-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center justify-between gap-2">
                      <span>Prefer to share sensitive documents on WhatsApp?</span>
                      <a
                        href={getWhatsAppUrl('document-sharing')}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold underline hover:text-white shrink-0 font-mono"
                      >
                        Share via WhatsApp &rarr;
                      </a>
                    </div>

                    {/* Staged Files Preview List */}
                    {stagedFiles.length > 0 && (
                      <div className="mt-3 space-y-2 max-h-48 overflow-y-auto pr-1">
                        {stagedFiles.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-[#080B11] border border-slate-800">
                            <div className="flex items-center gap-2.5 overflow-hidden">
                              <Icons.File className="w-4 h-4 text-[#D4AF37] shrink-0" />
                              <div className="truncate">
                                <p className="text-xs font-semibold text-white truncate">{item.name}</p>
                                <p className="text-[10px] text-slate-500 font-mono">{item.size}</p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(idx)}
                              disabled={isSubmitting}
                              className="text-slate-500 hover:text-red-400 transition-colors p-1"
                              title="Remove file"
                            >
                              <Icons.Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-[#1E2E4A] text-[#080B11] font-black text-sm uppercase tracking-wider shadow-xl shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/60 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Icons.Loader2 className="w-5 h-5 animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Icons.Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
