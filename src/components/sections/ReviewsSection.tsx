import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/shared/SectionTitle';
import { REVIEWS, REVIEW_SUMMARY } from '@/lib/data/reviews';
import { FONTS } from '@/lib/constants/theme';

export function ReviewsSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.12 });

  return (
    <section ref={ref} className="section-y bg-surface-grouped" aria-labelledby="reviews-title">
      <div className="container-page">
        <SectionTitle
          eyebrow="Familias"
          title="Lo que se siente en casa"
          subtitle="Padres y estudiantes hablan de disciplina, confianza y un proceso que se nota."
          isInView={isInView}
        />

        <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-3">
            <div className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div>
              <p className="text-[28px] leading-none text-white" style={{ fontFamily: FONTS.heading }}>
                {REVIEW_SUMMARY.rating}
              </p>
              <p className="text-[13px] text-white/50">{REVIEW_SUMMARY.count} reseñas</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <motion.blockquote
              key={review.author}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08 }}
              className="rounded-card border border-white/10 bg-black/40 p-6"
            >
              <div className="mb-3 flex" aria-label={`${review.rating} de 5`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-4 text-[15px] leading-relaxed text-white/80">“{review.text}”</p>
              <footer>
                <cite className="not-italic text-[15px] font-medium text-white">{review.author}</cite>
                {review.location && <p className="text-[13px] text-white/45">{review.location}</p>}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
