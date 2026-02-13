import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { useScroll } from '@/hooks/useScroll';
import { NAV_LINKS } from '@/lib/data/navigation';
import { COLORS, FONTS } from '@/lib/constants/theme';

export function Header() {
  const isScrolled = useScroll(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-black/50'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: COLORS.primary }}
            >
              <span className="text-white" style={{ fontFamily: FONTS.heading, fontSize: '24px' }}>
                AC
              </span>
            </div>
            <div className="hidden md:block">
              <div className="text-white" style={{ fontFamily: FONTS.heading, fontSize: '18px', lineHeight: '1.2' }}>
                Academia Caucana
              </div>
              <div style={{ color: COLORS.primary, fontSize: '12px', letterSpacing: '1px' }}>
                TAEKWONDO ITF
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white transition-colors duration-300"
                style={{ fontFamily: FONTS.body }}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.white)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="text-white px-6 py-2 transition-all duration-300 shadow-lg shadow-red-900/50 hover:shadow-red-900/80"
              style={{
                fontFamily: FONTS.heading,
                fontSize: '18px',
                letterSpacing: '1px',
                borderRadius: '0',
                background: `linear-gradient(to right, ${COLORS.primaryDark}, ${COLORS.primaryLight})`,
              }}
              onClick={() => {
                document.getElementById('inscripciones')?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Ir a sección de inscripciones"
            >
              Únete Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden py-4 border-t"
            style={{ borderColor: `${COLORS.primary}33` }}
            role="navigation"
            aria-label="Menú de navegación móvil"
          >
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white transition-colors duration-300 py-2"
                  style={{ fontFamily: FONTS.body }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.primary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.white)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="text-white mt-2"
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: '18px',
                  letterSpacing: '1px',
                  borderRadius: '0',
                  background: `linear-gradient(to right, ${COLORS.primaryDark}, ${COLORS.primaryLight})`,
                }}
              >
                Únete Ahora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
