import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Instructores', href: '#instructores' },
    { name: 'Academia', href: '#academia' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Inscripciones', href: '#inscripciones' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-black/50'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#D30000] flex items-center justify-center">
              <span className="text-white" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '24px' }}>
                AC
              </span>
            </div>
            <div className="hidden md:block">
              <div className="text-white" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', lineHeight: '1.2' }}>
                Academia Caucana
              </div>
              <div className="text-[#D30000]" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                TAEKWONDO ITF
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#D30000] transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-gradient-to-r from-[#C00000] to-[#FF0000] hover:from-[#FF0000] hover:to-[#C00000] text-white px-6 py-2 transition-all duration-300 shadow-lg shadow-red-900/50 hover:shadow-red-900/80"
              style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', letterSpacing: '1px', borderRadius: '0' }}
            >
              Únete Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#D30000]/20">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#D30000] transition-colors duration-300 py-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="bg-gradient-to-r from-[#C00000] to-[#FF0000] text-white mt-2"
                style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', letterSpacing: '1px', borderRadius: '0' }}
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
