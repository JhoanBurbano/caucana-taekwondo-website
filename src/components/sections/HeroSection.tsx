import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Pause, Play } from 'lucide-react';
import { getImageUrl } from '@/lib/assets';
import { HERO_SLIDES } from '@/lib/data/hero';
import { ACADEMY_STATS } from '@/lib/data/stats';
import { FONTS } from '@/lib/constants/theme';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD = 48;

export function HeroSection() {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = HERO_SLIDES[index];

  const goTo = useCallback((i: number) => {
    setIndex((i + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (reduced || paused) return;
    const t = window.setInterval(() => {
      if (!document.hidden) next();
    }, AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [next, paused, reduced]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-black pb-24 pt-[calc(var(--header-h)+env(safe-area-inset-top)+1.5rem)] sm:items-center sm:pb-16"
      aria-roledescription="carrusel"
      aria-label="Modalidades de la academia"
    >
      <AnimatePresence initial={false}>
        {HERO_SLIDES.map((s, i) =>
          i === index ? (
            <motion.div
              key={s.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.55 }}
              drag={reduced ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              onDragEnd={(_, info) => {
                if (info.offset.x > SWIPE_THRESHOLD) prev();
                else if (info.offset.x < -SWIPE_THRESHOLD) next();
              }}
            >
              <div
                className={`hero-media absolute inset-0 ${i === index ? 'is-active' : ''}`}
                style={{ backgroundImage: `url(${getImageUrl(s.imageId)})` }}
                role="img"
                aria-label={s.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
              <div className="grain" />
            </motion.div>
          ) : null,
        )}
      </AnimatePresence>

      <div className="container-page relative z-10 w-full">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              {slide.eyebrow && (
                <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-brand-light">
                  {slide.eyebrow}
                </p>
              )}
              <h1
                className="mb-3 text-white"
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: 'clamp(3.25rem, 12vw, 7rem)',
                  lineHeight: 0.9,
                  letterSpacing: '0.04em',
                }}
              >
                {slide.title}
              </h1>
              <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-white/80">
                Popayán, Cauca
              </p>
              <p className="mb-8 max-w-xl text-body text-white/85">{slide.subtitle}</p>
              <div className="flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                <a href="#inscripciones" className="btn-primary min-h-12 px-7">
                  Reserva tu clase gratis
                </a>
                <a href="#academia" className="btn-secondary min-h-12 px-7">
                  Conoce la academia
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Cifras de la academia">
            {ACADEMY_STATS.map((stat) => (
              <li
                key={stat.id}
                className="rounded-card border border-white/12 bg-black/35 px-3 py-3 backdrop-blur-md"
              >
                <div className="text-[28px] leading-none text-white sm:text-[32px]" style={{ fontFamily: FONTS.heading }}>
                  {stat.value}
                </div>
                <div className="mt-1 text-[13px] font-medium text-white">{stat.label}</div>
                <div className="text-[12px] text-white/55">{stat.hint}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <div className="flex gap-2" role="tablist" aria-label="Elegir modalidad">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={s.title}
                onClick={() => goTo(i)}
                data-active={i === index && !paused}
                className="progress-track"
              >
                <span className="progress-fill" />
              </button>
            ))}
          </div>
          {!reduced && (
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80"
              onClick={() => setPaused((v) => !v)}
              aria-label={paused ? 'Reanudar carrusel' : 'Pausar carrusel'}
            >
              {paused ? <Play className="h-4 w-4" aria-hidden /> : <Pause className="h-4 w-4" aria-hidden />}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
