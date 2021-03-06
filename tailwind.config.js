module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.scss',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '530px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      scale: {
        '25': '0.25',
        '250': '2.5',
        '300': '3',
        '400': '4',
      },
      width: {
        '200': '200%',
        'fit': 'fit-content',
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        '-20': '-20',
      }
    },
  },
  variants: {
    extend: {
      inset: ['responsive'],
    },
  },
  plugins: [],
}
