import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CoachesSection } from './components/CoachesSection';
import { PricingSection } from './components/PricingSection';
import { GallerySection } from './components/GallerySection';
import { SponsorsSection } from './components/SponsorsSection';
import { Footer } from './components/Footer';
import { FloatingPaymentButton } from './components/FloatingPaymentButton';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CoachesSection />
        <PricingSection />
        <GallerySection />
        <SponsorsSection />
      </main>
      <Footer />
      <FloatingPaymentButton />
    </div>
  );
}
