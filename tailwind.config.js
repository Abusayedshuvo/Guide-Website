/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      // colors: {
      //   yellow: "#ffa500",
      //   white: "#fff",
      // },
    },
  },
  plugins: [require("preline/plugin")],
};
