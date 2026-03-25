import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SPONSORS } from '@/lib/data/sponsors';
import { getImageUrl } from '@/lib/assets';
import { SectionTitle } from '@/shared/SectionTitle';
import { COLORS, FONTS, ANIMATIONS } from '@/lib/constants/theme';

/** Altura mínima común (px): logo + label multilínea alineado */
const CARD_MIN_HEIGHT = 244;
/** Ancho fijo de cada tarjeta (px) */
const CARD_WIDTH = 188;
/** Alineado con `gap-4` → 16px */
const CARD_GAP = 16;
const ONE_COPY_WIDTH = SPONSORS.length * CARD_WIDTH + (SPONSORS.length - 1) * CARD_GAP;

export function SponsorsSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.3 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (!scrollRef.current) return;
    let rafId: number;
    let offset = 0;
    const speed = 0.35;

    function tick() {
      const strip = scrollRef.current;
      if (strip && !pausedRef.current) {
        offset += speed;
        if (offset >= ONE_COPY_WIDTH) offset = 0;
        strip.style.transform = `translateX(-${offset}px)`;
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      id="eventos"
      ref={ref}
      className="py-16"
      style={{ backgroundColor: COLORS.backgroundTertiary }}
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nuestros Aliados"
          highlight="Aliados"
          className="mb-10"
          isInView={isInView}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: ANIMATIONS.duration.slow, delay: 0.15 }}
        >
          <div
            className="overflow-hidden -mx-4 md:-mx-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
            }}
          >
            <motion.div
              ref={scrollRef}
              initial={false}
              className="flex gap-4 py-2 will-change-transform"
              style={{ width: ONE_COPY_WIDTH * 2 }}
              aria-label="Carrusel horizontal de aliados y patrocinadores"
            >
              {[1, 2].map((copy) => (
                <div
                  key={copy}
                  className="flex shrink-0 items-stretch gap-4"
                  style={{ width: ONE_COPY_WIDTH }}
                >
                  {SPONSORS.map((sponsor, i) => (
                    <article
                      key={`${copy}-${sponsor.name}-${i}`}
                      className="flex shrink-0 flex-col self-stretch"
                      style={{ width: CARD_WIDTH, minWidth: CARD_WIDTH }}
                    >
                      <a
                        href={sponsor.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex min-h-0 flex-1 flex-col items-stretch justify-between gap-2 bg-[#1A1A1A] px-3 py-4 text-inherit no-underline transition-[background-color,box-shadow] duration-300 hover:bg-[#D30000]/10 shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_0_0_3px_#0A0A0A,0_0_0_4px_rgba(211,0,0,0.28)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.11),0_0_0_3px_#0A0A0A,0_0_0_4px_rgba(211,0,0,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                        style={{ minHeight: CARD_MIN_HEIGHT }}
                        aria-label={`${sponsor.name} — abrir sitio web en una pestaña nueva`}
                      >
                        <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
                          <div
                            className="isolate mx-auto flex aspect-square w-full max-w-[120px] shrink-0 items-center justify-center overflow-hidden rounded-sm"
                            style={{ backgroundColor: 'transparent' }}
                          >
                            <img
                              src={getImageUrl(sponsor.image)}
                              alt=""
                              loading="lazy"
                              decoding="async"
                              width={120}
                              height={120}
                              className="h-full w-full object-contain object-center p-1.5 opacity-90 transition-opacity duration-300 group-hover:opacity-100 mix-blend-screen"
                            />
                          </div>
                        </div>
                        <p
                          className="shrink-0 text-center text-[8px] leading-tight tracking-wide text-white/35 transition-colors duration-300 group-hover:text-[#D30000]"
                          style={{ fontFamily: FONTS.body }}
                        >
                          {sponsor.name}
                        </p>
                      </a>
                    </article>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
