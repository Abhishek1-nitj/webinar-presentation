/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#07090E',
          card: '#0D111A',
          border: '#1A2333',
        },
      },
    },
  },
  plugins: [],
};
