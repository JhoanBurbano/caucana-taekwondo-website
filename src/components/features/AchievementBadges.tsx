import { motion } from 'motion/react';

const ACHIEVEMENTS = [
  {
    id: 'centroamericanos',
    icon: '🥇',
    title: 'Campeones',
    subtitle: 'Centroamericanos 2025',
    color: 'from-yellow-400 to-yellow-600',
    delay: 0,
  },
  {
    id: 'revelacion',
    icon: '🏆',
    title: 'Academia Revelación',
    subtitle: 'ITF Colombia 2025',
    color: 'from-red-500 to-red-700',
    delay: 0.2,
  },
  {
    id: 'nacionales',
    icon: '🥉',
    title: 'Medallistas',
    subtitle: 'Campeonato Nacional',
    color: 'from-orange-400 to-orange-600',
    delay: 0.4,
  },
];

export function AchievementBadges() {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {ACHIEVEMENTS.map((achievement) => (
        <motion.div
          key={achievement.id}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: achievement.delay,
            type: 'spring',
            stiffness: 100,
          }}
          className="achievement-badge"
        >
          <div
            className={`flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${achievement.color} shadow-lg backdrop-blur-sm border border-white/20`}
            style={{
              boxShadow: '0 0 20px rgba(220, 38, 38, 0.6), 0 8px 16px rgba(0, 0, 0, 0.3)',
            }}
          >
            <span className="text-2xl" aria-hidden="true">
              {achievement.icon}
            </span>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm leading-tight">
                {achievement.title}
              </span>
              <span className="text-white/90 text-xs leading-tight">
                {achievement.subtitle}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
