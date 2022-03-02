const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        cursive: "Moon Dance"
      },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
