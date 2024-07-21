module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        turquoise: '#40E0D0',
        turquoiseDark:"#103b36",
        slateblue: '#6A5ACD',
        darkslateblue: '#483D8B'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
