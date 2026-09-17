import { memo } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import type { Review } from '@/lib/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/shared/SectionTitle';
import { BELT_HEX, REVIEWS, REVIEW_SUMMARY } from '@/lib/data/reviews';
import { FONTS } from '@/lib/constants/theme';

/**
 * Distintivo de grado: barra del color del cinturón. Una franja es un grado intermedio
 * —el cinturón anterior con una banda del siguiente color—, así que se dibuja como una
 * barra clara con una banda del color, y el cinturón pleno como barra sólida.
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
        <Star
          key={i}
          className={`h-4 w-4 ${i < filled ? 'fill-amber-400 text-amber-400' : 'text-white/20'}`}
        />
      ))}
    </span>
  );
}

export const ReviewsSection = memo(function ReviewsSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.1 });

  return (
    <section id="testimonios" ref={ref} className="section-y bg-surface-grouped">
      <div className="container-page">
        <SectionTitle
          eyebrow="Testimonios"
          title="Lo que dicen quienes entrenan aquí"
          subtitle="Estudiantes y familias de la academia, con nombre y grado."
          isInView={isInView}
        />

        <div className="mb-10 flex items-center justify-center gap-4">
          <Stars rating={Number(REVIEW_SUMMARY.rating)} />
          <p className="flex items-baseline gap-2">
            <span
              className="text-[30px] leading-none text-white"
              style={{ fontFamily: FONTS.heading }}
            >
              {REVIEW_SUMMARY.rating}
            </span>
            <span className="text-[14px] text-white/50">
              sobre {REVIEW_SUMMARY.count} testimonios
            </span>
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <motion.blockquote
              key={review.author}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.06 }}
              className="flex flex-col rounded-card border border-white/10 bg-black/40 p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <Stars rating={review.rating} />
                <span className="text-[13px] tabular-nums text-white/45">
                  {review.rating.toFixed(1)}
                </span>
              </div>

              <p className="mb-5 flex-1 text-[15px] leading-relaxed text-white/80">
                “{review.text}”
              </p>

              <footer className="flex items-center gap-3 border-t border-white/8 pt-4">
                <BeltMark review={review} />
                <span className="min-w-0">
                  <cite className="block truncate not-italic text-[15px] font-medium text-white">
                    {review.author}
                  </cite>
                  <span className="block text-[13px] text-white/45">{review.rank}</span>
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
});
