/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'deep-blue': '#0f172a',
        'slate-gray': '#8f9fb9',
      },
    },
  },
  plugins: [],
};
