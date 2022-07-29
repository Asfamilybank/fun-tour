/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  important: 'body',
  darkMode: 'media',
  theme: {
    ringColor: ({ theme }) => ({
      DEFAULT: theme('colors.ring', '#D2D5F6'),
      ...theme('colors')
    }),
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4C56DD',
          darken: '#2733CE',
          lighten: '#EEEFFC',
          lighten_more: '#FBFBFE',
          dark: '#383B61',
          dark_more: '#111331'
        },
        secondary: {
          DEFAULT: '#F4F5FA',
          darken: '#EAEBF6'
        },
        success: {
          DEFAULT: '#177826',
          lighten: '#EAFBEC'
        },
        error: {
          DEFAULT: '#DA3E3E',
          darken: '#C12525',
          lighten: '#FCEEEE'
        },
        warning: {
          DEFAULT: '#565610',
          lighten: '#FBFBEA'
        },
        ring: {
          DEFAULT: '#D2D5F6',
          error: '#F8DBDB'
        }
      }
    },
    variants: {
      extend: {}
    },
    plugins: []
  }
}
