import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { CalendarDays, MapPin, Shirt, Tags } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/shared/SectionTitle';
import { SchedulePanel } from '../info/SchedulePanel';
import { PlansPanel } from '../info/PlansPanel';
import { UniformPanel } from '../info/UniformPanel';
import { LocationPanel } from '../info/LocationPanel';
import { FONTS } from '@/lib/constants/theme';

/**
 * Los `id` son los mismos que ya usaba la navegación cuando esto eran tres secciones
 * sueltas (#horarios, #planes, #contacto). Al vivir en el botón de cada pestaña, los
 * enlaces de siempre siguen llevando al sitio correcto y además abren su panel.
 */
const TABS = [
  { id: 'horarios', label: 'Horarios', hint: 'Cuándo entrena cada grupo', icon: CalendarDays, Panel: SchedulePanel },
  { id: 'planes', label: 'Planes', hint: 'Mensualidad y matrícula', icon: Tags, Panel: PlansPanel },
  { id: 'uniforme', label: 'Uniforme', hint: 'Dobok y sudadera', icon: Shirt, Panel: UniformPanel },
  { id: 'contacto', label: 'Cómo llegar', hint: 'Dirección y mapa', icon: MapPin, Panel: LocationPanel },
] as const;

type TabId = (typeof TABS)[number]['id'];

export const InfoSection = memo(function InfoSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.05 });
  const [active, setActive] = useState<TabId>('horarios');
  const tabsRef = useRef<HTMLDivElement>(null);

  // Abre la pestaña que pida el hash, tanto al cargar como al pulsar un enlace del menú.
  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.slice(1) as TabId;
      if (TABS.some((t) => t.id === id)) setActive(id);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  /** Flechas para moverse entre pestañas, como espera un tablist. */
  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    const keys = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const i = TABS.findIndex((t) => t.id === (document.activeElement as HTMLElement)?.id);
    if (i < 0) return;
    const last = TABS.length - 1;
    const next =
      e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : e.key === 'ArrowDown' || e.key === 'ArrowRight' ? (i + 1) % TABS.length
      : (i - 1 + TABS.length) % TABS.length;
    const el = tabsRef.current?.querySelector<HTMLButtonElement>(`#${TABS[next].id}`);
    el?.focus();
    setActive(TABS[next].id);
  }, []);

  return (
    <section id="informacion" ref={ref} className="section-y bg-surface-grouped">
      <div className="container-page">
        <SectionTitle
          eyebrow="Información práctica"
          title="Todo lo que necesitas para empezar"
          subtitle="Horarios, precios, uniforme y cómo llegar. En un solo sitio, sin buscar por toda la página."
          isInView={isInView}
        />

        <div className="grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-10">
          {/* Selector: vertical en escritorio, tira horizontal en móvil */}
          <div
            ref={tabsRef}
            role="tablist"
            aria-orientation="vertical"
            aria-label="Información práctica"
            onKeyDown={onKeyDown}
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {TABS.map((tab) => {
              const selected = tab.id === active;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  id={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(tab.id)}
                  className={`flex shrink-0 items-center gap-3 rounded-control border px-4 py-3 text-left transition-colors duration-200 lg:w-full ${
                    selected
                      ? 'border-brand/50 bg-brand/10 text-white'
                      : 'border-white/10 bg-black/30 text-white/65 hover:border-white/25 hover:text-white'
                  }`}
                  style={{ scrollMarginTop: 'calc(var(--header-h) + 2rem)' }}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 ${selected ? 'text-brand' : 'text-white/40'}`}
                    aria-hidden
                  />
                  <span className="min-w-0">
                    <span
                      className="block whitespace-nowrap text-[16px] leading-tight lg:text-[17px]"
                      style={{ fontFamily: FONTS.heading, letterSpacing: '0.03em' }}
                    >
                      {tab.label}
                    </span>
                    <span className="hidden text-[12px] leading-tight text-white/45 lg:block">
                      {tab.hint}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/*
            Los cuatro paneles se montan siempre y se ocultan con `hidden`: así el
            contenido está en el HTML para el buscador, y cambiar de pestaña no rehace
            el mapa ni la tabla de horarios.
          */}
          <div className="min-w-0">
            {TABS.map((tab) => (
              <div
                key={tab.id}
                id={`panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={tab.id}
                hidden={tab.id !== active}
                tabIndex={0}
              >
                <tab.Panel />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
