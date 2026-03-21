import { useEffect, useState } from 'react';
import { navigationLinks } from '@/data/site-content';
import { BrandMark } from '@/components/ui/BrandMark';
import { LinkButton } from '@/components/ui/LinkButton';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <header className={`site-header${isScrolled ? ' site-header--scrolled' : ''}`}>
      <div className="shell site-header__inner">
        <a className="site-header__brand" href="#inicio" onClick={() => setIsMenuOpen(false)}>
          <BrandMark compact />
        </a>

        <nav className="site-nav" aria-label="Principal">
          {navigationLinks.map((link) => (
            <a key={link.href} className="site-nav__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <LinkButton href="#contacto" size="md">Inscríbete</LinkButton>
          <button
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="menu-toggle"
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${isMenuOpen ? ' mobile-menu--open' : ''}`} id="mobile-menu">
        <nav className="mobile-menu__panel" aria-label="Navegación móvil">
          {navigationLinks.map((link) => (
            <a key={link.href} className="mobile-menu__link" href={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <LinkButton href="#contacto" size="lg" onClick={() => setIsMenuOpen(false)}>
            Inscríbete
          </LinkButton>
        </nav>
      </div>
    </header>
  );
}
