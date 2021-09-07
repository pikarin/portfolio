module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          lighter: '#C1B5FC',
          light: '#9582F2',
          DEFAULT: '#6C55E0',
          dark: '#5943CB',
        },
        secondary: '#100E1B',
        body: {
          DEFAULT: '#FBFBFE',
          inverted: '#191627',
        },
        container: {
          DEFAULT: '#FFFFFF',
          inverted: '#211D35',
        },
        scroll: {
          DEFAULT: '#716C89',
          thumb: '#545167',
          inverted: '#E3E2E9',
          'thumb-inverted': '#C8C6D2',
        }
      },
      textColor: {
        default: {
          DEFAULT: '#6D6A7C',
          inverted: '#BCBAC4',
        },
        light: {
          DEFAULT: '#A19FAD',
          inverted: '#A19FAD',
        },
        title: {
          DEFAULT: '#242329',
          inverted: '#F2F1F3',
        },
        'input-inverted': '#211D35'
      },
      boxShadow: {
        top: '0 -1px 4px rgba(0,0,0,.15)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
