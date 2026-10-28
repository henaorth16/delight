/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      curley: ['Lobster', 'cursive'],
      mont: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
