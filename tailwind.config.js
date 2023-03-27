/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-green": "#4DBBBA",
      "accent-yellow": "#FFC224",
      "headings-black": "#141A1A",
      "subheadings-black": "#263130",
      "text-color": "#4C5757",
      "placeholder-color": "#AFB6B6",
      "white-95": "#F2F2F2",
      "background-white": "#FCFCFC",
    },
    extend: {},
  },
  plugins: [],
};
