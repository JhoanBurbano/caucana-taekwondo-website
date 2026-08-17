import { Suspense, lazy } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ErrorBoundary } from './shared/ErrorBoundary';
import { Toaster } from './components/ui/toaster';
import { SkeletonLoader } from './shared/SkeletonLoader';
import { WhatsAppButton } from './components/features/WhatsAppButton';
import { FONTS } from './lib/constants/theme';

// Lazy load de secciones pesadas
const AboutSection = lazy(() => import('./components/sections/AboutSection').then(m => ({ default: m.AboutSection })));
const CoachesSection = lazy(() => import('./components/sections/CoachesSection').then(m => ({ default: m.CoachesSection })));
const PricingSection = lazy(() => import('./components/sections/PricingSection').then(m => ({ default: m.PricingSection })));
const GallerySection = lazy(() => import('./components/sections/GallerySection').then(m => ({ default: m.GallerySection })));
const ReviewsSection = lazy(() => import('./components/sections/ReviewsSection').then(m => ({ default: m.ReviewsSection })));
const FAQSection = lazy(() => import('./components/sections/FAQSection').then(m => ({ default: m.FAQSection })));
const InstagramSection = lazy(() => import('./components/sections/InstagramSection').then(m => ({ default: m.InstagramSection })));
const SponsorsSection = lazy(() => import('./components/sections/SponsorsSection').then(m => ({ default: m.SponsorsSection })));

export default function App() {
  return (
    <ErrorBoundary>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-red-600"
        style={{ fontFamily: FONTS.body }}
      >
        Saltar al contenido principal
      </a>

      <div className="min-h-screen bg-black">
        <Header />
        <main id="main-content">
          <HeroSection />
          <Suspense fallback={<SkeletonLoader variant="card" className="h-96" />}>
            <AboutSection />
          </Suspense>
          <Suspense fallback={<SkeletonLoader variant="card" className="h-96" />}>
            <CoachesSection />
          </Suspense>
          <Suspense fallback={<SkeletonLoader variant="card" className="h-96" />}>
            <PricingSection />
          </Suspense>
          <Suspense fallback={<SkeletonLoader variant="card" className="h-96" />}>
            <GallerySection />
          </Suspense>
          <Suspense fallback={<SkeletonLoader variant="card" className="h-96" />}>
            <ReviewsSection />
          </Suspense>
          <Suspense fallback={<SkeletonLoader variant="card" className="h-96" />}>
            <FAQSection />
          </Suspense>
          <Suspense fallback={<SkeletonLoader variant="card" className="h-96" />}>
            <InstagramSection />
          </Suspense>
          <Suspense fallback={<SkeletonLoader variant="card" className="h-96" />}>
            <SponsorsSection />
          </Suspense>
        </main>
        <Footer />
        <Toaster />
        <WhatsAppButton />
      </div>
    </ErrorBoundary>
  );
}
