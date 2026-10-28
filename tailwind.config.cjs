/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      curley: ['Lobster'],
      mont: ['Montserrat'],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
