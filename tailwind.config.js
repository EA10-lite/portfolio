/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f2eff0',
        dark: '#666666',
        black: "#000",
        white: '#fff',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '991px',
        xl: '1280px'
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
};