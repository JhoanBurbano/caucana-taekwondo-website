import { motion } from 'motion/react';

/**
 * Achievement Badges - Rediseñados para dramatic dark theme
 * Colores Academia Caucana: Negro, Rojo, Blanco
 * Estilo agresivo y disruptivo
 */

const ACHIEVEMENTS = [
  {
    id: 'centroamericanos',
    icon: '🥇',
    title: 'CAMPEONES',
    subtitle: 'Centroamericanos 2025',
    bgColor: '#DC2626', // Rojo principal
    borderColor: '#FFFFFF',
    delay: 0,
  },
  {
    id: 'revelacion',
    icon: '🏆',
    title: 'ACADEMIA REVELACIÓN',
    subtitle: 'ITF Colombia 2025',
    bgColor: '#000000', // Negro
    borderColor: '#DC2626',
    delay: 0.15,
  },
  {
    id: 'nacionales',
    icon: '🥉',
    title: 'MEDALLISTAS',
    subtitle: 'Nacional 2025',
    bgColor: '#FFFFFF', // Blanco
    borderColor: '#DC2626',
    textColor: '#000000',
    delay: 0.3,
  },
];

export function AchievementBadges() {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {ACHIEVEMENTS.map((achievement) => (
        <motion.div
          key={achievement.id}
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: achievement.delay,
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          className="achievement-badge-dramatic"
        >
          <div
            className="flex items-center gap-2 px-3 py-1.5 border-2 backdrop-blur-md"
            style={{
              backgroundColor: achievement.bgColor,
              borderColor: achievement.borderColor,
              boxShadow: `0 0 20px ${achievement.bgColor === '#000000' ? 'rgba(220, 38, 38, 0.6)' : 'rgba(0, 0, 0, 0.8)'}, 0 4px 12px rgba(0, 0, 0, 0.5)`,
            }}
          >
            <span className="text-xl" aria-hidden="true">
              {achievement.icon}
            </span>
            <div className="flex flex-col">
              <span
                className="font-black text-xs leading-none tracking-wider"
                style={{
                  color: achievement.textColor || '#FFFFFF',
                  fontFamily: 'Bebas Neue, sans-serif',
                }}
              >
                {achievement.title}
              </span>
              <span
                className="text-[10px] leading-none mt-0.5"
                style={{
                  color: achievement.textColor ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.8)',
                }}
              >
                {achievement.subtitle}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
