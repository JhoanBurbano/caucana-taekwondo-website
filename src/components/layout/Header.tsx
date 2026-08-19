import { useEffect, useId, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScroll } from '@/hooks/useScroll';
import { useLockBody } from '@/hooks/useMediaQuery';
import { NAV_LINKS } from '@/lib/data/navigation';
import { FONTS } from '@/lib/constants/theme';
import { getImageUrl } from '@/lib/assets';

export function Header() {
  const isScrolled = useScroll(12);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  useLockBody(open);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border] duration-300 ${
        isScrolled || open ? 'material-nav border-b border-white/10' : 'bg-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="container-page">
        <div className="flex h-[var(--header-h)] items-center justify-between gap-3">
          <a href="#inicio" className="flex min-h-tap items-center gap-3 rounded-control" onClick={close}>
            <img
              src={getImageUrl('logo-academia-caucana')}
              alt="Academia Caucana de Taekwondo ITF"
              className="h-11 w-11 rounded-full object-cover"
              width={44}
              height={44}
            />
            <span className="hidden sm:block leading-tight">
              <span className="block text-[17px] text-white" style={{ fontFamily: FONTS.heading, letterSpacing: '0.04em' }}>
                Academia Caucana
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-light">
                Taekwondo ITF
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-control px-3 py-2 text-[15px] font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#inscripciones" className="btn-primary hidden h-11 px-5 text-[15px] lg:inline-flex">
              Reserva tu clase
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-control text-white lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              aria-controls={menuId}
            >
              {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id={menuId}
          className="material-nav border-t border-white/10 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
        >
          <nav className="container-page flex flex-col gap-1 py-4 pb-8" aria-label="Móvil">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={close}
                className="rounded-control px-2 py-3 text-[28px] leading-none text-white"
                style={{ fontFamily: FONTS.heading, letterSpacing: '0.04em' }}
              >
                {link.name}
              </a>
            ))}
            <a href="#inscripciones" onClick={close} className="btn-primary mt-4 w-full">
              Reserva tu clase gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
