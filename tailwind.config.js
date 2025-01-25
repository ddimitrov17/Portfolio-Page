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
        aboutBorder: '#1C1C21',
      },
      backgroundImage: {
        BookAppBackground: "url('/assets/booklogo_pink.png')",
        TripAppBackground: "url('assets/flight_yellow.png')",
        SocialNetworkBackground: "url('assets/socialnetwork_green.png')"
      },
      screens: {
        'max-1400': { max: '1400px' },
        'max-600': { max: '600px' },
        'max-400': { max: '400px' }
      }
    },
  },
  plugins: [],
};
