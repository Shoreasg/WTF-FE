/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
        marquee2: "marquee2 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-300%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(300%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      colors: {
        "light-white": "#FCFCFC",
        "light-green-accent": "#4DBBBA",
        "light-yellow-cta": "#FFC224",
        "light-gray-400": "#141A1A",
        "light-gray-300": "#263130",
        "light-gray-200": "#9AA3A3",
        "light-gray-100": "#F2F2F2",
        "dark-gray-300": "#141A1A",
        "dark-green-accent-87%": "#4DBBBA87",
        "dark-yellow-cta": "#FFC22487",
        "dark-gray-200": "#1B2323",
        "dark-gray-100": "#9AA3A3",
        "dark-white-87%": "#FCFCFC87",
        "dark-white-60%": "#FCFCFC60",
        "dark-white-38%": "#FCFCFC38",
      },
      fontFamily:{
        "DM-Sans": ["DM Sans", "sans-serif"],
        "Lalezar": ["Lalezar", "cursive"],
      }
    },
  },
  plugins: [],
};
