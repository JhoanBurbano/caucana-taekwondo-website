import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Mensual',
    price: '120.000',
    period: 'mes',
    features: [
      'Acceso ilimitado a entrenamientos',
      '3 clases semanales',
      'Asesoría personalizada',
      'Eventos internos',
      'Material de práctica incluido',
    ],
    featured: false,
  },
  {
    name: 'Trimestral',
    price: '330.000',
    period: '3 meses',
    features: [
      'Acceso ilimitado a entrenamientos',
      'Clases ilimitadas',
      'Asesoría personalizada',
      'Eventos internos',
      'Material de práctica incluido',
      'Evaluación de progreso mensual',
      '10% de descuento',
    ],
    featured: true,
  },
  {
    name: 'Anual',
    price: '1.200.000',
    period: 'año',
    features: [
      'Acceso ilimitado a entrenamientos',
      'Clases ilimitadas',
      'Asesoría personalizada premium',
      'Todos los eventos incluidos',
      'Material de práctica incluido',
      'Evaluación de progreso mensual',
      'Seminarios especiales',
      'Preparación para exámenes de grado',
      '20% de descuento',
    ],
    featured: false,
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="inscripciones" ref={ref} className="py-20 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '2px',
            }}
          >
            Planes de <span className="text-[#D30000]">Entrenamiento</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px' }}>
            Elige el plan que mejor se adapte a tu compromiso y objetivos
          </p>
          <div className="w-24 h-1 bg-[#D30000] mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative ${plan.featured ? 'md:-mt-4 md:mb-0' : ''}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D30000] px-6 py-1 z-10">
                  <span className="text-white" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '14px', letterSpacing: '1px' }}>
                    Más Popular
                  </span>
                </div>
              )}

              <div
                className={`bg-black border-2 ${
                  plan.featured ? 'border-[#D30000]' : 'border-white/10'
                } p-8 h-full flex flex-col relative overflow-hidden group`}
              >
                {/* Diagonal accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                  style={{
                    background: 'linear-gradient(135deg, transparent 50%, #D30000 50%)',
                  }}
                />

                <div className="relative z-10">
                  <h3
                    className="text-white mb-2"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', letterSpacing: '1px' }}
                  >
                    {plan.name}
                  </h3>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-white/50" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px' }}>$</span>
                      <span
                        className="text-[#D30000]"
                        style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '48px', lineHeight: '1' }}
                      >
                        {plan.price}
                      </span>
                    </div>
                    <div className="text-white/50" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                      COP / {plan.period}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#D30000] flex-shrink-0 mt-0.5" />
                        <span className="text-white/80" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full py-6 transition-all duration-300 ${
                      plan.featured
                        ? 'bg-gradient-to-r from-[#C00000] to-[#FF0000] hover:from-[#FF0000] hover:to-[#C00000] text-white shadow-lg shadow-red-900/50'
                        : 'bg-white text-black hover:bg-[#D30000] hover:text-white'
                    }`}
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '20px',
                      letterSpacing: '1px',
                      borderRadius: '0',
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
