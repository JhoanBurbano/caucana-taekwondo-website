import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ValuesSection } from '@/components/sections/ValuesSection';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { BeltsSection } from '@/components/sections/BeltsSection';
import { FinalCtaSection } from '@/components/sections/FinalCtaSection';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <HeroSection />
        <ValuesSection />
        <ProgramsSection />
        <BeltsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
