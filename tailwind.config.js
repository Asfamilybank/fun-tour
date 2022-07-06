module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#2733CE',
        info: '#EAEBF6'
      }
    },
    variants: {
      extend: {}
    },
    plugins: []
  }
}
