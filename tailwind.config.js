/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  daisyui: {
    themes: [ "emerald"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

