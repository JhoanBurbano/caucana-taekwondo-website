import { motion } from 'motion/react';

/**
 * Achievement Stats - Números destacados estilo Budora
 * Reemplaza badges por stats numéricas impactantes
 */

const STATS = [
  {
    id: 'years',
    number: '15+',
    label: 'AÑOS',
    sublabel: 'de Trayectoria',
    delay: 0,
  },
  {
    id: 'championships',
    number: '10+',
    label: 'CAMPEONATOS',
    sublabel: 'Ganados',
    delay: 0.15,
  },
  {
    id: 'students',
    number: '100+',
    label: 'ESTUDIANTES',
    sublabel: 'Activos',
    delay: 0.3,
  },
  {
    id: 'medals',
    number: '50+',
    label: 'MEDALLAS',
    sublabel: 'Internacionales',
    delay: 0.45,
  },
];

export function AchievementStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8"
    >
      {STATS.map((stat) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: stat.delay,
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="achievement-stat"
        >
          <div className="flex flex-col items-center gap-1 px-6 py-4 bg-black/40 backdrop-blur-lg border-2 border-red-600 rounded-sm">
            {/* Número grande */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: stat.delay + 0.3 }}
              className="text-5xl md:text-6xl font-black text-white"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                letterSpacing: '2px',
                textShadow: '0 0 20px rgba(220, 38, 38, 0.8), 0 0 40px rgba(220, 38, 38, 0.5), 0 4px 8px rgba(0, 0, 0, 0.8)',
              }}
            >
              {stat.number}
            </motion.div>

            {/* Label principal */}
            <div
              className="text-sm md:text-base font-black text-white leading-none"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                letterSpacing: '3px',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
              }}
            >
              {stat.label}
            </div>

            {/* Sublabel */}
            <div
              className="text-xs text-white/80"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                letterSpacing: '1px',
              }}
            >
              {stat.sublabel}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
