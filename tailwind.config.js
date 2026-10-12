/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        socon: {
          blue: "#0066CC",
          darkBlue: "#00529B",
          green: "#8DC63F",
          dark: "#0B0F17",
          slate: "#0F172A",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}