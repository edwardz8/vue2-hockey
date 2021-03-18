module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
    purge: ['./public/**/*.html', './src/**/*.vue'],
    darkMode: 'media', // or false
    theme: {
      fontFamily: {},
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }