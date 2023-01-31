/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#171717",
        secondary: "#ffffff",
        tertiary: {
          100: "#F8E8E9",
          200: "#F1C1C5",
          300: "#E99AA1",
          400: "#E1747D",
          500: "#C52C48",
          600: "#A52A43",
          700: "#83273E",
          800: "#612439",
          900: "#3F2134",
        }
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    plugins: [],
  }
}