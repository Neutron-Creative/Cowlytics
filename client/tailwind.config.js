module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '2xs': '9px',
      },
      ringWidth: {
        'DEFAULT': '3px'
      },
      maxWidth: {
        '8xl': '1440px'
      }
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [],
}
