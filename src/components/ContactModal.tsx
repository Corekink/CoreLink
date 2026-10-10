import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { BRANDING } from '@/data/branding';
import { toast } from '@/components/ui/toaster';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: string;
  currentLang?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  selectedService,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: selectedService || 'UAE Visa & Immigration',
    notes: '',
    website: '', // Honeypot field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      toast({
        title: 'Required Information Missing',
        description: 'Please provide both your name and a valid phone or WhatsApp number.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          notes: formData.notes,
          source: 'Contact Modal',
          website: formData.website,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit inquiry to server.');
      }

      toast({
        title: 'Inquiry Successfully Transmitted',
        description: data.message || `Thank you, ${formData.fullName}. Your dossier has been logged and our executive consultant will contact you regarding ${formData.service}.`,
        variant: 'success',
      });

      // Clear form and close modal
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: selectedService || 'UAE Visa & Immigration',
        notes: '',
        website: '',
      });
      onClose();
    } catch (err: any) {
      console.warn('[Inquiry Submission Notice]', err?.message || err);
      toast({
        title: 'Inquiry Transmission Notice',
        description: err.message || 'We could not send your inquiry right now. Please contact us on WhatsApp +971 56 805 5093 or call 06 805 5093.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl bg-[#0B1528] border border-white/15 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-white"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all hover:rotate-90 duration-300 cursor-pointer"
            >
              <Icons.X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6 space-y-1">
              <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
                DIRECT SERVICE REQUEST
              </div>
              <h3 className="text-2xl font-bold font-sans text-white">
                Connect with an Advisor
              </h3>
              <p className="text-xs text-slate-400">
                Submit your requirements for direct transmission to our executive PRO desk.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Invisible Honeypot Field */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name / Company Name <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Al Mansoori"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full bg-[#050B14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp / Phone <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 56 805 5093"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full bg-[#050B14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full bg-[#050B14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Selected Service
                </label>
                <input
                  type="text"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full bg-[#050B14] border border-[#D4AF37]/40 rounded-xl px-4 py-2.5 text-sm text-[#D4AF37] font-semibold focus:outline-none focus:border-[#D4AF37] transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Notes or Special Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Provide case references, passport nationality, or required timeline..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full bg-[#050B14] border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#D4AF37] resize-none transition-colors disabled:opacity-50"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#b58b3c] text-slate-950 font-bold text-xs shadow-lg hover:shadow-[#D4AF37]/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Icons.Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Icons.ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={BRANDING.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shrink-0 cursor-pointer shadow-md"
                >
                  <Icons.MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp</span>
                </motion.a>
              </div>

              <div className="pt-2 text-center text-[11px] text-slate-400 border-t border-white/5 flex items-center justify-center gap-2">
                <span>Or call Ajman HQ directly:</span>
                <a href="tel:+97168055093" className="text-[#D4AF37] font-mono font-bold hover:underline inline-flex items-center gap-1">
                  <Icons.PhoneCall className="w-3 h-3" />
                  <span>06 805 5093</span>
                </a>
              </div>
            </form>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
