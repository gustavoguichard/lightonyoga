const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        orange: colors.orange,
      },
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
  },
  variants: {
    aspectRatio: ['responsive'],
  },
  plugins: [
    require('tailwindcss-responsive-embed'),
    require('tailwindcss-aspect-ratio'),
  ],
}
