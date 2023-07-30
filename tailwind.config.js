/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#eeeaea",
        black: "#000",
        gray: "#232120",
        orangered: "#ff6610",
      },
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      "45xl": "64px",
      xl: "20px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
