/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Darker Grotesque', 'sans-serif']
      },
      colors: {
        black: '#232834',
        'black-accent': '#34364b',
        primary: '#db1d71',
        'primary-accent': '#c01a63',
        'green-accent': '#e8f1d7',
        'purple-accent': '#a297e4',
        'pink-accent': '#f8bed4'
      },
      boxShadow: {
        'offset-black': '2px 2px black'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  }
};
