import React, { lazy, Suspense } from 'react';
import { useOutletContext } from 'react-router-dom';
import { MouseFollowGlow } from '@/components/MouseFollowGlow';
import { Hero } from '@/components/Hero';
import { PageMeta } from '@/components/PageMeta';

// Lazy-load every section below the Hero for peak performance
const StatsBar = lazy(() => import('@/components/StatsBar').then(m => ({ default: m.StatsBar })));
const AboutAgency = lazy(() => import('@/components/AboutAgency').then(m => ({ default: m.AboutAgency })));
const CompanyProfileShowcase = lazy(() => import('@/components/CompanyProfileShowcase').then(m => ({ default: m.CompanyProfileShowcase })));
const TrustedPartnersBanner = lazy(() => import('@/components/TrustedPartnersBanner').then(m => ({ default: m.TrustedPartnersBanner })));
const GovernmentCentersHub = lazy(() => import('@/components/GovernmentCentersHub').then(m => ({ default: m.GovernmentCentersHub })));
const CoreServices = lazy(() => import('@/components/CoreServices').then(m => ({ default: m.CoreServices })));
const VisaStatusTracker = lazy(() => import('@/components/VisaStatusTracker').then(m => ({ default: m.VisaStatusTracker })));
const ServiceCostCalculator = lazy(() => import('@/components/ServiceCostCalculator').then(m => ({ default: m.ServiceCostCalculator })));
const DocumentChecklistDownloads = lazy(() => import('@/components/DocumentChecklistDownloads').then(m => ({ default: m.DocumentChecklistDownloads })));
const HowCoreLinkWorks = lazy(() => import('@/components/HowCoreLinkWorks').then(m => ({ default: m.HowCoreLinkWorks })));
const WhyCoreLink = lazy(() => import('@/components/WhyCoreLink').then(m => ({ default: m.WhyCoreLink })));
const InternationalVisas = lazy(() => import('@/components/InternationalVisas').then(m => ({ default: m.InternationalVisas })));
const FaqSection = lazy(() => import('@/components/FaqSection').then(m => ({ default: m.FaqSection })));
const ClientTestimonialSlider = lazy(() => import('@/components/ClientTestimonialSlider').then(m => ({ default: m.ClientTestimonialSlider })));
const ContactSection = lazy(() => import('@/components/ContactSection').then(m => ({ default: m.ContactSection })));

interface LayoutContext {
  onOpenInquiry: (serviceName?: string) => void;
}

// Light skeleton placeholder to avoid layout shifts
const SectionSkeleton: React.FC<{ minHeight?: string }> = ({ minHeight = 'min-h-[220px]' }) => (
  <div className={`w-full ${minHeight} bg-[#050B14] flex items-center justify-center py-12`}>
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 animate-pulse">
      <div className="h-4 w-32 bg-white/5 rounded-full mx-auto" />
      <div className="h-8 w-64 bg-white/5 rounded-xl mx-auto" />
      <div className="h-24 w-full bg-white/[0.02] border border-white/5 rounded-2xl" />
    </div>
  </div>
);

const Home: React.FC = () => {
  const { onOpenInquiry } = useOutletContext<LayoutContext>();

  return (
    <div className="bg-[#050B14] min-h-screen text-slate-100 overflow-x-hidden relative">
      <PageMeta
        title="UAE Visa, Manpower & Business Clearance Services"
        description="Official UAE government administrative liaison, Golden Visas, corporate PRO services, Mainland LLC business setup, and international ticketing."
      />

      {/* Interactive Mouse Follow Glow & Ambient Spotlight */}
      <MouseFollowGlow />

      {/* 1. Hero Banner with 3D Live Clearance Engine (Eagerly Loaded) */}
      <Hero
        onOpenInquiry={onOpenInquiry}
        onRequestService={() => onOpenInquiry('General Service Inquiry')}
      />

      {/* 2. Key Statistics & Milestone Counters */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[140px]" />}>
        <StatsBar />
      </Suspense>

      {/* 3. About the Agency Showcase */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[400px]" />}>
        <AboutAgency
          onOpenInquiry={(service) => onOpenInquiry(service || 'General Agency Consultation')}
        />
      </Suspense>

      {/* 4. Company Profile & Case Portfolio Showcase */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[400px]" />}>
        <CompanyProfileShowcase
          onOpenInquiry={(service) => onOpenInquiry(service)}
        />
      </Suspense>

      {/* 5. Official UAE Government Authorities & Clearance Desks */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[160px]" />}>
        <TrustedPartnersBanner
          onSelectEntity={(entity) => onOpenInquiry(`${entity} Liaison & Clearance`)}
        />
      </Suspense>

      {/* 6. One-Stop Government Centers Hub */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[350px]" />}>
        <GovernmentCentersHub
          onSelectService={(service) => onOpenInquiry(service)}
        />
      </Suspense>

      {/* 7. Strategic Business, Visa & Manpower Pillars */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[450px]" />}>
        <CoreServices
          onSelectService={(service) => onOpenInquiry(service)}
        />
      </Suspense>

      {/* 8. Live UAE Application & PRO Status Tracker */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[380px]" />}>
        <VisaStatusTracker
          onOpenInquiry={(service) => onOpenInquiry(service)}
        />
      </Suspense>

      {/* 9. Interactive Service Cost & Turnaround Calculator */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[420px]" />}>
        <ServiceCostCalculator
          onOpenInquiry={(service) => onOpenInquiry(service)}
        />
      </Suspense>

      {/* 10. Official UAE Document Checklists */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[300px]" />}>
        <DocumentChecklistDownloads
          onOpenInquiry={(service) => onOpenInquiry(service)}
        />
      </Suspense>

      {/* 11. Clear 4-Step Process Workflow */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[320px]" />}>
        <HowCoreLinkWorks />
      </Suspense>

      {/* 12. Why Choose CORE LINK */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[320px]" />}>
        <WhyCoreLink />
      </Suspense>

      {/* 13. Global Schengen & International Embassy Visa Desk */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[380px]" />}>
        <InternationalVisas
          onSelectCountry={(country) => onOpenInquiry(country)}
        />
      </Suspense>

      {/* 14. Frequently Asked Questions (FAQ) Accordion */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[350px]" />}>
        <FaqSection
          onOpenInquiry={(service) => onOpenInquiry(service)}
        />
      </Suspense>

      {/* 15. Verified Client Testimonials */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[320px]" />}>
        <ClientTestimonialSlider
          onOpenInquiry={(service) => onOpenInquiry(service)}
        />
      </Suspense>

      {/* 16. Contact, Walk-In Locations & Direct Inquiry Desk */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[450px]" />}>
        <ContactSection
          initialService="UAE Visa & Immigration"
          onSelectService={(service) => onOpenInquiry(service)}
        />
      </Suspense>
    </div>
  );
};

export default Home;
