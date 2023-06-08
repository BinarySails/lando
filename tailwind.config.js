const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        timberwolf: "#FFFAF1",
        bittersweet: "#ffa500",
        skobeloff: "#011c27",
        do: "#ff5408",
        "notwhite": "#fffaff"
      },
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
