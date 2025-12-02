import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const galleryItems = [
  {
    title: 'Campeonato Nacional 2024',
    category: 'Competencias',
    image: 'https://images.unsplash.com/photo-1506781764019-6039eb82c90b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWVrd29uZG8lMjBjb21wZXRpdGlvbiUyMHRvdXJuYW1lbnR8ZW58MXx8fHwxNzYyMjA0MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Examen de Cinturón Negro',
    category: 'Graduaciones',
    image: 'https://images.unsplash.com/photo-1617480348565-d60644e43fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWVrd29uZG8lMjB0cmFpbmluZyUyMG1hcnRpYWwlMjBhcnRzfGVufDF8fHx8MTc2MjIwNDM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Entrenamiento Intensivo',
    category: 'Entrenamientos',
    image: 'https://images.unsplash.com/photo-1758778932827-52b7e4799fbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhY2FkZW15JTIwdGVhbSUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjIwNDM2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Seminario Internacional',
    category: 'Eventos',
    image: 'https://images.unsplash.com/photo-1738835934988-ed0d238e8299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGluc3RydWN0b3IlMjB0ZWFjaGluZ3xlbnwxfHx8fDE3NjIyMDQzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Torneo Regional',
    category: 'Competencias',
    image: 'https://images.unsplash.com/photo-1617480348565-d60644e43fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWVrd29uZG8lMjB0cmFpbmluZyUyMG1hcnRpYWwlMjBhcnRzfGVufDF8fHx8MTc2MjIwNDM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Demostración Pública',
    category: 'Eventos',
    image: 'https://images.unsplash.com/photo-1506781764019-6039eb82c90b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWVrd29uZG8lMjBjb21wZXRpdGlvbiUyMHRvdXJuYW1lbnR8ZW58MXx8fHwxNzYyMjA0MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="galeria" ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-4">
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
            Logros y <span className="text-[#D30000]">Eventos</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px' }}>
            Celebrando nuestros triunfos y momentos memorables
          </p>
          <div className="w-24 h-1 bg-[#D30000] mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="mb-2">
                  <span
                    className="text-[#D30000] inline-block px-3 py-1 bg-black/50"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '12px', letterSpacing: '1px' }}
                  >
                    {item.category}
                  </span>
                </div>
                <h3
                  className="text-white mb-2"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '24px', letterSpacing: '1px' }}
                >
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>Ver más</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-[#D30000] border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
