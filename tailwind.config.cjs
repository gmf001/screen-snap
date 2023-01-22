/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1440px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Cal Sans', 'sans-serif']
      },
      colors: {
        dark: '#1f2023',
        'dark-accent': '#27282b',
        primary: '#a297e4',
        'primary-accent': '#b2a8f4'
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
