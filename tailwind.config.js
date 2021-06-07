module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        '250': '2.5',
        '300': '3',
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        '-20': '-20',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
