/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/index.html'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'deep-blue': '#0f172a',
      },
    },
  },
  plugins: [],
};
