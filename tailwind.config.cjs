/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0f0f0f',
        primary: '#db1d71',
        'primary-accent': '#c01a63',
        'primary-light': '#fd61a6',
        dark: '#141416',
        'dark-accent-1': '#1c1d22',
        'dark-accent-2': '#232329',
        gray: {
          ...colors.zinc
        }
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  }
};
