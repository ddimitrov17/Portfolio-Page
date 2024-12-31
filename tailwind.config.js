/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aboutSectionColor: '#0E0E10',
        aboutBorder: '#1C1C21'
      }
    },
  },
  plugins: [],
}

