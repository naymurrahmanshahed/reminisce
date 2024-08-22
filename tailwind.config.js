/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#d53f41",
      light: "#dbd8d6",
      lighter: "#f5f0ec",
      dark: "#626262",
      darker: "#464646",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      baijamjuree: ["Bai Jamjuree", "sans-serif"],
      syncopate: ["Syncopate", "sans-serif"],
      bodoni: ["Bodoni Moda", "serif"],
    },
    extend: {
      theme: {
        colors: {},
      },
    },
  },
  plugins: [],
};
