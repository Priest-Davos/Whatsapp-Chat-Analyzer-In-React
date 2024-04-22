module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Purge unused styles
  darkMode: false, // Disable dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Extend font family with Roboto
      },
      colors: {
        primary: '#ff7c00', // Extend color palette with a custom primary color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};