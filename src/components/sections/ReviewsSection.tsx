import { memo, useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Pause, Play, Star } from 'lucide-react';
import type { Review } from '@/lib/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { SectionTitle } from '@/shared/SectionTitle';
import { BELT_HEX, REVIEWS, REVIEW_SUMMARY } from '@/lib/data/reviews';
import { FONTS } from '@/lib/constants/theme';

const AUTOPLAY_MS = 7000;
const SWIPE_THRESHOLD = 48;

/**
 * Distintivo de grado: barra del color del cinturón. Una franja es un grado intermedio
 * —el cinturón anterior con una banda del siguiente color—, así que se dibuja como una
 * barra clara con banda central, y el cinturón pleno como barra sólida.
 */
function BeltMark({ review }: { review: Review }) {
  const hex = BELT_HEX[review.belt];
  return (
    <span
      className="inline-block h-2.5 w-7 shrink-0 rounded-full"
      style={
        review.stripe
          ? { background: `linear-gradient(90deg, rgba(245,245,247,.25) 38%, ${hex} 38%, ${hex} 62%, rgba(245,245,247,.25) 62%)` }
          : { background: hex }
      }
      aria-hidden
    />
  );
}

function Stars({ rating }: { rating: number }) {
  const filled = Math.round(rating);
  return (
    <span className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < filled ? 'fill-amber-400 text-amber-400' : 'text-white/20'}`} />
      ))}
    </span>
  );
}

export const ReviewsSection = memo(function ReviewsSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.1 });
  const reduced = usePrefersReducedMotion();
  const isLg = useMediaQuery('(min-width: 1024px)');
  const isSm = useMediaQuery('(min-width: 640px)');
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const perView = isLg ? 3 : isSm ? 2 : 1;
  const pages = Math.max(1, REVIEWS.length - perView + 1);
  const current = Math.min(index, pages - 1);

  const goTo = useCallback((i: number, total: number) => setIndex(((i % total) + total) % total), []);
  const next = useCallback(() => goTo(current + 1, pages), [current, goTo, pages]);
  const prev = useCallback(() => goTo(current - 1, pages), [current, goTo, pages]);

  useEffect(() => {
    if (reduced || paused || !isInView || pages < 2) return;
    const t = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % pages);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [isInView, pages, paused, reduced]);

  return (
    <section
      id="testimonios"
      ref={ref}
      className="section-y bg-surface-grouped"
      aria-roledescription="carrusel"
      aria-label="Testimonios de estudiantes y familias"
    >
      <div className="container-page">
        <SectionTitle
          eyebrow="Testimonios"
          title="Lo que dicen quienes entrenan aquí"
          subtitle="Estudiantes y familias de la academia, con nombre y grado."
          isInView={isInView}
        />

        <div className="mb-8 flex items-center justify-center gap-4">
          <Stars rating={Number(REVIEW_SUMMARY.rating)} />
          <p className="flex items-baseline gap-2">
            <span className="text-[30px] leading-none text-white" style={{ fontFamily: FONTS.heading }}>
              {REVIEW_SUMMARY.rating}
            </span>
            <span className="text-[14px] text-white/50">sobre {REVIEW_SUMMARY.count} testimonios</span>
          </p>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <motion.ul
            className="flex"
            animate={{ x: `-${current * (100 / perView)}%` }}
            transition={{ duration: reduced ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
            drag={reduced ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x > SWIPE_THRESHOLD) prev();
              else if (info.offset.x < -SWIPE_THRESHOLD) next();
            }}
          >
            {REVIEWS.map((review, i) => (
              <li
                key={review.author}
                className="shrink-0 px-2 first:pl-0 last:pr-0"
                style={{ width: `${100 / perView}%` }}
                aria-hidden={i < current || i >= current + perView}
              >
                <blockquote className="flex h-full flex-col rounded-card border border-white/10 bg-black/40 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Stars rating={review.rating} />
                    <span className="text-[13px] tabular-nums text-white/45">{review.rating.toFixed(1)}</span>
                  </div>

                  <p className="mb-5 flex-1 text-[15px] leading-relaxed text-white/80">“{review.text}”</p>

                  <footer className="flex items-center gap-3 border-t border-white/8 pt-4">
                    <BeltMark review={review} />
                    <span className="min-w-0">
                      <cite className="block truncate not-italic text-[15px] font-medium text-white">
                        {review.author}
                      </cite>
                      <span className="block text-[13px] text-white/45">{review.rank}</span>
                    </span>
                  </footer>
                </blockquote>
              </li>
            ))}
          </motion.ul>
        </div>

        {pages > 1 && (
          <div className="mt-7 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Testimonios anteriores"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Grupo de testimonios">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Grupo ${i + 1} de ${pages}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-brand' : 'w-2 bg-white/25 hover:bg-white/45'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Testimonios siguientes"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>

            {!reduced && (
              <button
                type="button"
                onClick={() => setPaused((v) => !v)}
                aria-label={paused ? 'Reanudar carrusel' : 'Pausar carrusel'}
                className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:text-white"
              >
                {paused ? <Play className="h-4 w-4" aria-hidden /> : <Pause className="h-4 w-4" aria-hidden />}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
});
