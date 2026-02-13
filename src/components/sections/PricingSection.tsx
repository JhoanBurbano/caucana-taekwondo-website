import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { PRICING_PLANS } from '@/lib/data/pricing';
import { SectionTitle } from '@/shared/SectionTitle';
import { COLORS, FONTS, ANIMATIONS } from '@/lib/constants/theme';

export function PricingSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.2 });

  return (
    <section
      id="inscripciones"
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: COLORS.backgroundSecondary }}
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Planes de Entrenamiento"
          highlight="Entrenamiento"
          subtitle="Elige el plan que mejor se adapte a tu compromiso y objetivos"
          isInView={isInView}
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: ANIMATIONS.duration.normal, delay: index * ANIMATIONS.delay.staggerLarge }}
              className={`relative ${plan.featured ? 'md:-mt-4 md:mb-0' : ''}`}
            >
              {plan.featured && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 z-10"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <span className="text-white" style={{ fontFamily: FONTS.heading, fontSize: '14px', letterSpacing: '1px' }}>
                    Más Popular
                  </span>
                </div>
              )}

              <div
                className="border-2 p-8 h-full flex flex-col relative overflow-hidden group"
                style={{
                  backgroundColor: COLORS.background,
                  borderColor: plan.featured ? COLORS.primary : 'rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Diagonal accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${COLORS.primary} 50%)`,
                  }}
                />

                <div className="relative z-10">
                  <h3
                    className="text-white mb-2"
                    style={{ fontFamily: FONTS.heading, fontSize: '32px', letterSpacing: '1px' }}
                  >
                    {plan.name}
                  </h3>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span style={{ fontFamily: FONTS.body, fontSize: '18px', color: COLORS.textMuted }}>$</span>
                      <span style={{ fontFamily: FONTS.heading, fontSize: '48px', lineHeight: '1', color: COLORS.primary }}>
                        {plan.price}
                      </span>
                    </div>
                    <div style={{ fontFamily: FONTS.body, fontSize: '14px', color: COLORS.textMuted }}>
                      COP / {plan.period}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} />
                        <span style={{ fontFamily: FONTS.body, fontSize: '14px', color: COLORS.textSecondary }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full py-6 transition-all duration-300"
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: '20px',
                      letterSpacing: '1px',
                      borderRadius: '0',
                      ...(plan.featured
                        ? {
                          background: `linear-gradient(to right, ${COLORS.primaryDark}, ${COLORS.primaryLight})`,
                          color: COLORS.white,
                        }
                        : {
                          backgroundColor: COLORS.white,
                          color: COLORS.background,
                        }),
                    }}
                  >
                    Entrena Ahora
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
