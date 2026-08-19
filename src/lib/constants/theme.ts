export const COLORS = {
  primary: '#FF3B30',
  primaryDark: '#D70015',
  primaryLight: '#FF6961',
  background: '#000000',
  backgroundSecondary: '#1C1C1E',
  backgroundTertiary: '#0A0A0A',
  elevated: '#2C2C2E',
  white: '#FFFFFF',
  textPrimary: '#F5F5F7',
  textSecondary: 'rgba(245, 245, 247, 0.78)',
  textTertiary: 'rgba(245, 245, 247, 0.58)',
  textMuted: 'rgba(245, 245, 247, 0.42)',
  ring: '#FF6961',
} as const;

export const FONTS = {
  heading: '"Bebas Neue", "Arial Narrow", sans-serif',
  body: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
} as const;

export const SPACING = {
  section: 'py-20',
  sectionSmall: 'py-16',
  container: 'container mx-auto px-4',
} as const;

export const ANIMATIONS = {
  duration: {
    fast: 0.28,
    normal: 0.5,
    slow: 0.7,
  },
  delay: {
    stagger: 0.08,
    staggerLarge: 0.12,
    staggerMedium: 0.1,
  },
} as const;

export const RADIUS = {
  control: '12px',
  card: '20px',
  sheet: '24px',
} as const;
