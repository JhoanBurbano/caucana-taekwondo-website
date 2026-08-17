import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/shared/SectionTitle';
import { COLORS, FONTS, ANIMATIONS } from '@/lib/constants/theme';

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  location?: string;
}

const REVIEWS: Review[] = [
  {
    author: 'María González',
    rating: 5,
    text: 'Excelente academia. Mi hijo ha mejorado enormemente su disciplina y confianza en solo 4 meses. Los instructores son muy profesionales y el ambiente es familiar.',
    date: 'Hace 2 semanas',
    location: 'Madre de estudiante',
  },
  {
    author: 'Carlos Rodríguez',
    rating: 5,
    text: 'Los instructores son profesionales y los resultados en competencias hablan por sí solos. Academia Revelación ITF 2025 no es casualidad.',
    date: 'Hace 1 mes',
    location: 'Estudiante adulto',
  },
  {
    author: 'Ana Martínez',
    rating: 5,
    text: 'Mi hija empezó tímida y ahora es una niña segura de sí misma. El proceso es estructurado y los logros competitivos son impresionantes.',
    date: 'Hace 3 semanas',
    location: 'Madre de estudiante',
  },
];

const GOOGLE_REVIEWS_URL = 'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review';

export function ReviewsSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: COLORS.backgroundSecondary }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Lo que dicen nuestros estudiantes"
          highlight="estudiantes"
          subtitle="Testimonios reales de familias que confían en nosotros"
          isInView={isInView}
        />

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-white">
              <div style={{ fontFamily: FONTS.heading, fontSize: '32px', lineHeight: '1' }}>
                4.9
              </div>
              <div style={{ fontFamily: FONTS.body, fontSize: '14px', color: COLORS.textMuted }}>
                (47 reseñas)
              </div>
            </div>
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-white transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: FONTS.body,
              fontSize: '14px',
              backgroundColor: COLORS.primary,
              boxShadow: `0 4px 12px ${COLORS.primary}50`,
            }}
          >
            Ver en Google
          </a>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: ANIMATIONS.duration.normal,
                delay: index * ANIMATIONS.delay.staggerMedium,
              }}
              className="border-2 p-6 relative overflow-hidden group hover:border-opacity-50 transition-all duration-300"
              style={{
                backgroundColor: COLORS.background,
                borderColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Quote decoration */}
              <div
                className="absolute top-0 right-0 text-8xl opacity-5 leading-none"
                style={{ fontFamily: FONTS.heading, color: COLORS.primary }}
              >
                "
              </div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: COLORS.textSecondary,
                  }}
                >
                  "{review.text}"
                </p>
                <div>
                  <div style={{ fontFamily: FONTS.heading, fontSize: '16px', color: COLORS.white }}>
                    {review.author}
                  </div>
                  {review.location && (
                    <div style={{ fontFamily: FONTS.body, fontSize: '13px', color: COLORS.textMuted }}>
                      {review.location}
                    </div>
                  )}
                  <div style={{ fontFamily: FONTS.body, fontSize: '12px', color: COLORS.textMuted }}>
                    {review.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p style={{ fontFamily: FONTS.body, fontSize: '16px', color: COLORS.textSecondary }}>
            <strong className="text-white">47 familias</strong> confiaron en nosotros este mes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
