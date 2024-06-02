/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'smd': '490px',
        // => @media (min-width: 490px)
        'lgmd': '568px',
        'xs': '460px',
      },
      colors: {

        'gold': '#b79a00',
        'sky-blue': '#8bd5f8',
        'water-blue': '#00728d',


      },
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
}

