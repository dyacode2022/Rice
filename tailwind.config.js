module.exports = {
  // purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        'bgc': '#1E1E25',
        'nb': '#23232B'
      }
    },
  },
  plugins: [],
};