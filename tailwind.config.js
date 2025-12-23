/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDF8F0',
          100: '#FAF0E0',
          200: '#F5E1C1',
          300: '#EDD0A0',
          400: '#E8C17C',
          500: '#D4A85F',
          600: '#B88F4A',
          700: '#9A7639',
          800: '#7A5E2D',
          900: '#5C4722',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#666666',
          600: '#4D4D4D',
          700: '#3A3A3A',
          800: '#2D2D2D',
          900: '#1F1F1F',
        },
      },
    },
  },
  plugins: [],
};
