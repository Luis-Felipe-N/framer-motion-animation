/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        latoLight: "Lato 300",
        latoBold: "Lato",
        latoReg: "Lato 400",
      }
    },
  },
  plugins: [],
}