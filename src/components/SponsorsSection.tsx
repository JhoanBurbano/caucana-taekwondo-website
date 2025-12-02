import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const sponsors = [
  { name: 'ITF Colombia', logo: 'ITF' },
  { name: 'Gobernación del Cauca', logo: 'GOB' },
  { name: 'Alcaldía de Popayán', logo: 'ALC' },
  { name: 'Coldeportes', logo: 'COL' },
  { name: 'SportFit', logo: 'SF' },
  { name: 'Nutrición Plus', logo: 'NP' },
];

export function SponsorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="eventos" ref={ref} className="py-16 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-white mb-2"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(28px, 4vw, 48px)',
              letterSpacing: '2px',
            }}
          >
            Nuestros <span className="text-[#D30000]">Aliados</span>
          </h2>
          <div className="w-16 h-1 bg-[#D30000] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 bg-[#1A1A1A] hover:bg-[#D30000]/10 transition-colors duration-300 border border-white/5 group"
            >
              <div className="text-center">
                <div
                  className="text-white/40 group-hover:text-white/80 transition-colors duration-300"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', letterSpacing: '2px' }}
                >
                  {sponsor.logo}
                </div>
                <div
                  className="text-white/20 group-hover:text-[#D30000] transition-colors duration-300 mt-1"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px' }}
                >
                  {sponsor.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
