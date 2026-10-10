import React, { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import Layout from '@/components/site/Layout';

// Lazy load route pages for performance
const Home = lazy(() => import('@/pages/Home'));
const Agency = lazy(() => import('@/pages/Agency'));
const Services = lazy(() => import('@/pages/Services'));
const Visa = lazy(() => import('@/pages/Visa'));
const UaeServices = lazy(() => import('@/pages/UaeServices'));
const Manpower = lazy(() => import('@/pages/Manpower'));
const BusinessServices = lazy(() => import('@/pages/BusinessServices'));
const About = lazy(() => import('@/pages/About'));
const EuropeVisa = lazy(() => import('@/pages/EuropeVisa'));
const Contact = lazy(() => import('@/pages/Contact'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const Terms = lazy(() => import('@/pages/Terms'));
const VisaDisclaimer = lazy(() => import('@/pages/VisaDisclaimer'));
const Ticketing = lazy(() => import('@/pages/Ticketing'));
const Profile = lazy(() => import('@/pages/Profile'));
const Scene = lazy(() => import('@/Scene'));
const PageNotFound = lazy(() => import('./lib/PageNotFound'));

const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#050B14]">
    <div className="w-8 h-8 border-3 border-slate-700 border-t-[#D4AF37] rounded-full animate-spin"></div>
  </div>
);

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app settings
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#050B14]">
        <div className="w-8 h-8 border-4 border-slate-700 border-t-[#D4AF37] rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/kage" element={<Scene />} />
        <Route path="/scene" element={<Scene />} />
        <Route path="/kage-landing-page" element={<Scene />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/services" element={<Services />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/uae-services" element={<UaeServices />} />
          <Route path="/manpower" element={<Manpower />} />
          <Route path="/business-services" element={<BusinessServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/europe-visa" element={<EuropeVisa />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/visa-disclaimer" element={<VisaDisclaimer />} />
          <Route path="/ticketing" element={<Ticketing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
