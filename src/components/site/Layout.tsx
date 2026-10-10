import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingAssistant } from '@/components/FloatingAssistant';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { ContactModal } from '@/components/ContactModal';

const Layout: React.FC = () => {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('General Service Inquiry');
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  // Scroll Progress Bar in Gold at the top of the viewport
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const handleOpenInquiry = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100 font-sans selection:bg-[#D4AF37] selection:text-black antialiased flex flex-col justify-between relative">
      {/* Top Gold Scroll Progress Bar */}
      {!shouldReduceMotion && (
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] origin-left z-[70] pointer-events-none shadow-sm shadow-[#D4AF37]/50"
        />
      )}

      {/* Top Navbar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content with Smooth Non-Blocking Page Transition */}
      <main className="flex-grow pt-[62px] sm:pt-[70px]">
        <motion.div
          key={location.pathname}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <Outlet context={{ onOpenInquiry: handleOpenInquiry }} />
        </motion.div>
      </main>

      {/* Floating AI Concierge */}
      <FloatingAssistant onSelectService={(service) => handleOpenInquiry(service)} />

      {/* Official Floating WhatsApp Button */}
      <FloatingWhatsApp currentService={selectedService} />

      {/* Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Modal for Service Inquiry */}
      <ContactModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
};

export default Layout;
