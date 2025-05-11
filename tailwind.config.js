/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{njk,md}", "./src/**/*.svg",
    "./_site/**/*.{html,js}",
    "./_includes/**/*.{html,njk}",
    "./index.njk"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}