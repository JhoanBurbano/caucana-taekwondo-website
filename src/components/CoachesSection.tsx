import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Award } from 'lucide-react';

const coaches = [
  {
    name: 'Maestro Carlos Rodríguez',
    rank: '6to Dan ITF',
    bio: 'Campeón nacional con más de 20 años de experiencia. Especialista en técnicas de combate y desarrollo de campeones.',
    image: 'https://images.unsplash.com/photo-1738835934988-ed0d238e8299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGluc3RydWN0b3IlMjB0ZWFjaGluZ3xlbnwxfHx8fDE3NjIyMDQzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Maestra Ana López',
    rank: '5to Dan ITF',
    bio: 'Experta en formas (Tuls) y filosofía del Taekwondo. Medallista panamericana dedicada a la formación integral.',
    image: 'https://images.unsplash.com/photo-1617480348565-d60644e43fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWVrd29uZG8lMjB0cmFpbmluZyUyMG1hcnRpYWwlMjBhcnRzfGVufDF8fHx8MTc2MjIwNDM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Instructor Miguel Torres',
    rank: '4to Dan ITF',
    bio: 'Entrenador de competidores juveniles. Especializado en preparación física y técnica de alto rendimiento.',
    image: 'https://images.unsplash.com/photo-1506781764019-6039eb82c90b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWVrd29uZG8lMjBjb21wZXRpdGlvbiUyMHRvdXJuYW1lbnR8ZW58MXx8fHwxNzYyMjA0MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Instructora Laura Mendoza',
    rank: '3er Dan ITF',
    bio: 'Especialista en defensa personal y técnicas de rompimiento. Enfoque en empoderamiento femenino.',
    image: 'https://images.unsplash.com/photo-1758778932827-52b7e4799fbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhY2FkZW15JTIwdGVhbSUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjIwNDM2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function CoachesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="instructores"
      ref={ref}
      className="py-20 bg-black relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)',
      }}
    >
      {/* Diagonal pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, #D30000 35px, #D30000 70px)',
          }}
        />
      </div>

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
            Nuestros <span className="text-[#D30000]">Maestros</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px' }}>
            Guiados por expertos comprometidos con la excelencia y el desarrollo de cada guerrero
          </p>
          <div className="w-24 h-1 bg-[#D30000] mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#1A1A1A] overflow-hidden relative">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                  
                  {/* Rank badge */}
                  <div className="absolute top-4 right-4 bg-[#D30000] px-3 py-1 flex items-center gap-1">
                    <Award className="w-4 h-4 text-white" />
                    <span className="text-white" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '14px' }}>
                      {coach.rank}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-white mb-2"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '24px', letterSpacing: '1px' }}
                  >
                    {coach.name}
                  </h3>
                  <p className="text-white/70 mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.6' }}>
                    {coach.bio}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-[#D30000] text-[#D30000] hover:bg-[#D30000] hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '16px', borderRadius: '0' }}
                  >
                    Ver Perfil
                  </Button>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D30000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D30000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
