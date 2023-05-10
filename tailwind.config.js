const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // timberwolf: "#edf2f1",
        timberwolf: "#edf2f1",
        wenge: "#524948",
        bittersweet: "#BA8F95",
        //skobeloff: "#0b7a75",
        skobeloff: "#2e4057",
        "dark-spring-green": "#2c6e49",
      },
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
