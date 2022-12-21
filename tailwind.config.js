/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: "'Manrope', sans-serif;",
      },
      screens: {
        "1.5xl": "1440px",
      },
    },
  },
  plugins: [],
};
