import { Suspense, lazy } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ErrorBoundary } from './shared/ErrorBoundary';
import { Toaster } from './components/ui/toaster';
import { SkeletonLoader } from './shared/SkeletonLoader';

// Lazy load de secciones pesadas
const AboutSection = lazy(() => import('./components/sections/AboutSection').then(m => ({ default: m.AboutSection })));
const CoachesSection = lazy(() => import('./components/sections/CoachesSection').then(m => ({ default: m.CoachesSection })));
const PricingSection = lazy(() => import('./components/sections/PricingSection').then(m => ({ default: m.PricingSection })));
const GallerySection = lazy(() => import('./components/sections/GallerySection').then(m => ({ default: m.GallerySection })));
const SponsorsSection = lazy(() => import('./components/sections/SponsorsSection').then(m => ({ default: m.SponsorsSection })));
const FloatingPaymentButton = lazy(() => import('./components/features/FloatingPaymentButton').then(m => ({ default: m.FloatingPaymentButton })));

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-black">
        <Header />
        <main>
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
            <SponsorsSection />
          </Suspense>
        </main>
        <Footer />
        <Suspense fallback={null}>
          <FloatingPaymentButton />
        </Suspense>
        <Toaster />
      </div>
    </ErrorBoundary>
  );
}
