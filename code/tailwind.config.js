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
          bg: '#1F1B24',
          input: '#1B1818'
        },
        gray: {
          light: '#262626',
          desc: '#D8D8D8',
          border: '#141414',
          placeholder: '#B8B8B8'
        }
      },
      height: {
        image: '450px'
      },
      width: {
        image: '720px'
      },
      gridTemplateColumns: {
        auto_auto: 'auto auto'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
