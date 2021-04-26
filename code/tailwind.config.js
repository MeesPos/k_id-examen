module.exports = {
  purge: [
    './resources/**/*.blade.php',
     './resources/**/*.js',
     './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#B91C1C',
          dark: '#961515'
        },
        black: {
          bg: '#1F1B24'
        },
        gray: {
          light: '#262626',
          desc: '#D8D8D8'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
