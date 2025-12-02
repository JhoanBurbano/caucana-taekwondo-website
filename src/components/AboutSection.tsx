import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Trophy, Target, Shield } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="academia" ref={ref} className="py-20 bg-[#1A1A1A] relative overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-[#D30000]/10 to-transparent" 
        style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%)' }}
      />

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
            Nuestro Legado de <span className="text-[#D30000]">Excelencia</span>
          </h2>
          <div className="w-24 h-1 bg-[#D30000] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white/80 mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '1.8' }}>
              En la Academia Caucana de Taekwondo ITF, formamos guerreros con valores inquebrantables. 
              Nuestra misión es desarrollar no solo habilidades físicas excepcionales, sino también 
              fortalecer el carácter, la disciplina y el honor de cada estudiante.
            </p>
            <p className="text-white/80 mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '1.8' }}>
              Con más de una década de experiencia, hemos cultivado campeones nacionales y formado 
              personas íntegras que llevan los principios del Taekwondo ITF más allá del tatami.
            </p>

            {/* Highlight Box */}
            <div className="bg-black border-l-4 border-[#D30000] p-6 mb-8">
              <div
                className="text-[#D30000] mb-2"
                style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '48px', lineHeight: '1' }}
              >
                +10 Años
              </div>
              <p className="text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                Formando campeones nacionales
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Shield className="w-10 h-10 text-[#D30000] mx-auto mb-2" />
                <div className="text-white" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px' }}>
                  Valor
                </div>
              </div>
              <div className="text-center">
                <Target className="w-10 h-10 text-[#D30000] mx-auto mb-2" />
                <div className="text-white" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px' }}>
                  Disciplina
                </div>
              </div>
              <div className="text-center">
                <Trophy className="w-10 h-10 text-[#D30000] mx-auto mb-2" />
                <div className="text-white" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px' }}>
                  Poder
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1738835934988-ed0d238e8299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGluc3RydWN0b3IlMjB0ZWFjaGluZ3xlbnwxfHx8fDE3NjIyMDQzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Entrenamiento de Taekwondo"
                className="w-full h-full object-cover"
              />
              {/* Red overlay on hover */}
              <div className="absolute inset-0 bg-[#D30000]/0 hover:bg-[#D30000]/20 transition-all duration-300" />
            </div>
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[#D30000]" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-[#D30000]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
