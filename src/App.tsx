import { Suspense, lazy } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { StickyMobileCTA } from './components/layout/StickyMobileCTA';
import { HeroSection } from './components/sections/HeroSection';
import { ErrorBoundary } from './shared/ErrorBoundary';
import { Toaster } from './components/ui/toaster';
import { SkeletonLoader } from './shared/SkeletonLoader';
import { WhatsAppButton } from './components/features/WhatsAppButton';
import { FloatingPaymentButton } from './components/features/FloatingPaymentButton';

const AboutSection = lazy(() => import('./components/sections/AboutSection').then((m) => ({ default: m.AboutSection })));
const ProgramsSection = lazy(() =>
  import('./components/sections/ProgramsSection').then((m) => ({ default: m.ProgramsSection })),
);
const CoachesSection = lazy(() =>
  import('./components/sections/CoachesSection').then((m) => ({ default: m.CoachesSection })),
);
const PricingSection = lazy(() =>
  import('./components/sections/PricingSection').then((m) => ({ default: m.PricingSection })),
);
const TrialSection = lazy(() => import('./components/sections/TrialSection').then((m) => ({ default: m.TrialSection })));
const GallerySection = lazy(() =>
  import('./components/sections/GallerySection').then((m) => ({ default: m.GallerySection })),
);
const ReviewsSection = lazy(() =>
  import('./components/sections/ReviewsSection').then((m) => ({ default: m.ReviewsSection })),
);
const FAQSection = lazy(() => import('./components/sections/FAQSection').then((m) => ({ default: m.FAQSection })));
const InstagramSection = lazy(() =>
  import('./components/sections/InstagramSection').then((m) => ({ default: m.InstagramSection })),
);
const SponsorsSection = lazy(() =>
  import('./components/sections/SponsorsSection').then((m) => ({ default: m.SponsorsSection })),
);
const LocationSection = lazy(() =>
  import('./components/sections/LocationSection').then((m) => ({ default: m.LocationSection })),
);

export default function App() {
  return (
    <ErrorBoundary>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-control focus:bg-white focus:px-4 focus:py-3 focus:text-black"
      >
        Saltar al contenido
      </a>

      <div className="min-h-screen bg-black text-white">
        <Header />
        <main id="main-content">
          <HeroSection />
          <Suspense fallback={<SkeletonLoader variant="card" className="mx-auto my-12 h-64 max-w-6xl" />}>
            <AboutSection />
            <ProgramsSection />
            <CoachesSection />
            <GallerySection />
            <ReviewsSection />
            <PricingSection />
            <TrialSection />
            <FAQSection />
            <LocationSection />
            <InstagramSection />
            <SponsorsSection />
          </Suspense>
        </main>
        <Footer />
        <Toaster />
        <WhatsAppButton />
        <StickyMobileCTA />
        <div className="hidden lg:block">
          <FloatingPaymentButton />
        </div>
      </div>
    </ErrorBoundary>
  );
}
