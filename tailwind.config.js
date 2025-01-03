/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 2s linear infinite',
        'timeline-progress': 'timeline-progress 1.5s ease-out forwards',
        'timeline-item': 'timeline-item 0.5s ease-out forwards',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'timeline-progress': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' }
        },
        'timeline-item': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'white',
            h1: { color: 'white' },
            h2: { color: 'white' },
            h3: { color: 'white' },
            h4: { color: 'white' },
            p: { color: 'white' },
            strong: { color: 'white' },
            a: { color: '#60a5fa' },
            code: { color: '#60a5fa' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};