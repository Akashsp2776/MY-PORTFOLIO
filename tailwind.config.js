/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0B',
        'bg-section': '#111111',
        'bg-card': '#171717',
        'bg-card-hover': '#1D1D1D',
        'border-subtle': '#2A2A2A',
        'border-hover': '#3A3A3A',
        copper: {
          DEFAULT: '#C48A4A',
          light: '#D49A5A',
          dark: '#A87238',
          50: 'rgba(196,138,74,0.05)',
          100: 'rgba(196,138,74,0.1)',
          200: 'rgba(196,138,74,0.2)',
          300: 'rgba(196,138,74,0.3)',
        },
        stone: {
          100: '#F5F5F5',
          300: '#9D9D9D',
          400: '#7A7A7A',
          500: '#5C5C5C',
          600: '#4A4A4A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      borderRadius: {
        '20': '20px',
      },
    },
  },
  plugins: [],
}
