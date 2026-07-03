/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: '#8A2E45',
          deep: '#6E2336',
          soft: '#A8475F',
        },
        cream: {
          DEFAULT: '#FFF6F7',
          50: '#FFFCFC',
          100: '#FFF6F7',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#1F1F1F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
