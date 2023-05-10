/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        timberwolf: "#edf2f1",
        wenge: "#524948",
        bittersweet: "#ff4747",
        skobeloff: "#0b7a75",
        "dark-spring-green": "#2c6e49",
      }
    },
  },
  plugins: [],
}
