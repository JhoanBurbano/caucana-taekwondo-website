export const COLORS = {
  primary: '#D30000',
  primaryDark: '#C00000',
  primaryLight: '#FF0000',
  background: '#000000',
  backgroundSecondary: '#1A1A1A',
  backgroundTertiary: '#0A0A0A',
  white: '#FFFFFF',
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.8)',
  textTertiary: 'rgba(255, 255, 255, 0.6)',
  textMuted: 'rgba(255, 255, 255, 0.4)',
} as const;

export const FONTS = {
  heading: 'Bebas Neue, sans-serif',
  body: 'Inter, sans-serif',
} as const;

export const SPACING = {
  section: 'py-20',
  sectionSmall: 'py-16',
  container: 'container mx-auto px-4',
} as const;

export const ANIMATIONS = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.8,
  },
  delay: {
    stagger: 0.1,
    staggerLarge: 0.15,
  },
} as const;

