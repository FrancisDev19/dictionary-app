const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#2C2E43',
        secondary: '#FFD523',
        gray: colors.trueGray,
        white: colors.white,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
