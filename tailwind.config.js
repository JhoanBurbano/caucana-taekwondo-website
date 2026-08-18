/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF3B30',
          dark: '#D70015',
          light: '#FF6961',
        },
        surface: {
          DEFAULT: '#000000',
          grouped: '#1C1C1E',
          elevated: '#2C2C2E',
        },
        ink: {
          DEFAULT: '#F5F5F7',
          secondary: 'rgba(245,245,247,0.78)',
          tertiary: 'rgba(245,245,247,0.58)',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Arial Narrow"', 'sans-serif'],
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        body: ['1.0625rem', { lineHeight: '1.47', letterSpacing: '-0.022em' }],
      },
      borderRadius: {
        control: '12px',
        card: '20px',
        sheet: '24px',
      },
      minHeight: {
        tap: '44px',
      },
      minWidth: {
        tap: '44px',
      },
      boxShadow: {
        glow: '0 8px 32px rgba(255, 59, 48, 0.28)',
        sheet: '0 24px 80px rgba(0,0,0,0.55)',
      },
      screens: {
        xs: '390px',
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
