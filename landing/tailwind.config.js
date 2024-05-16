/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "IBM Plex Sans"],
        gothambook: ["GothamBook", "sans-serif"],
      },
      colors: {
        green: "#4CFAC7",
      }
    },
  },
  plugins: [],
}