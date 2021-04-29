module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Rubik','ui-sans-serif', 'system-ui'],
      'body': ['Roboto','ui-sans-serif', 'system-ui'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
