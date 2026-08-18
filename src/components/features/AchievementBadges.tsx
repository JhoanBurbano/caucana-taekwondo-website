import { motion } from 'motion/react';

/**
 * Achievement Badges - FLOATING CORNERS
 * Colores Academia Caucana: Negro, Rojo, Blanco
 * Posicionados en esquinas con efectos 3D dramáticos
 */

const ACHIEVEMENTS = [
  {
    id: 'centroamericanos',
    icon: '🥇',
    title: 'CAMPEONES',
    subtitle: 'Centroamericanos 2025',
    bgColor: '#DC2626',
    borderColor: '#FFFFFF',
    position: 'top-right',
    delay: 0,
  },
  {
    id: 'revelacion',
    icon: '🏆',
    title: 'ACADEMIA REVELACIÓN',
    subtitle: 'ITF Colombia 2025',
    bgColor: '#000000',
    borderColor: '#DC2626',
    position: 'top-left',
    delay: 0.2,
  },
  {
    id: 'nacionales',
    icon: '🥉',
    title: 'MEDALLISTAS',
    subtitle: 'Nacional 2025',
    bgColor: '#FFFFFF',
    borderColor: '#DC2626',
    textColor: '#000000',
    position: 'bottom-right',
    delay: 0.4,
  },
];

const POSITION_STYLES = {
  'top-right': 'top-4 right-4 md:top-8 md:right-8',
  'top-left': 'top-4 left-4 md:top-8 md:left-8',
  'bottom-right': 'bottom-20 right-4 md:bottom-24 md:right-8',
  'bottom-left': 'bottom-20 left-4 md:bottom-24 md:left-8',
};

export function AchievementBadges() {
  return (
    <>
      {ACHIEVEMENTS.map((achievement) => (
        <motion.div
          key={achievement.id}
          initial={{ opacity: 0, scale: 0.3, rotate: -20, y: -50 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          transition={{
            duration: 1,
            delay: achievement.delay,
            type: 'spring',
            stiffness: 150,
            damping: 12,
          }}
          whileHover={{ scale: 1.15, rotate: 3, y: -8 }}
          whileTap={{ scale: 0.9 }}
          className={`achievement-badge-floating absolute z-20 ${POSITION_STYLES[achievement.position as keyof typeof POSITION_STYLES]}`}
        >
          <div
            className="flex items-center gap-3 px-4 py-2.5 border-[3px] backdrop-blur-lg"
            style={{
              backgroundColor: achievement.bgColor,
              borderColor: achievement.borderColor,
              boxShadow: `
                0 0 30px ${achievement.bgColor === '#000000' ? 'rgba(220, 38, 38, 0.8)' : 'rgba(220, 38, 38, 0.6)'},
                0 0 60px ${achievement.bgColor === '#000000' ? 'rgba(220, 38, 38, 0.5)' : 'rgba(0, 0, 0, 0.8)'},
                0 8px 24px rgba(0, 0, 0, 0.6),
                inset 0 1px 0 ${achievement.bgColor === '#FFFFFF' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)'},
                inset 0 -1px 0 rgba(0,0,0,0.3)
              `,
              transform: 'perspective(1000px) rotateX(0deg)',
            }}
          >
            <span 
              className="text-3xl md:text-4xl" 
              aria-hidden="true" 
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
              }}
            >
              {achievement.icon}
            </span>
            <div className="flex flex-col">
              <span
                className="font-black text-sm md:text-base leading-none tracking-widest"
                style={{
                  color: achievement.textColor || '#FFFFFF',
                  fontFamily: 'Bebas Neue, sans-serif',
                  textShadow: achievement.textColor 
                    ? '0 1px 2px rgba(0,0,0,0.3)' 
                    : '0 2px 4px rgba(0,0,0,0.8)',
                }}
              >
                {achievement.title}
              </span>
              <span
                className="text-xs md:text-sm leading-none mt-1"
                style={{
                  color: achievement.textColor ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)',
                  textShadow: achievement.textColor 
                    ? 'none' 
                    : '0 1px 2px rgba(0,0,0,0.6)',
                }}
              >
                {achievement.subtitle}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}
