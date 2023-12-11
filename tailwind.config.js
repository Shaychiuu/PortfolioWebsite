/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7"
        },
        subtle_green: {
          400: '#3D3561'
        }
      },
      backgroundImage: {
        'fade-ombre': 'linear-gradient(to bottom, rgba(0,128,128, 0.95), transparent)',
        'reversed-ombre': 'linear-gradient(to top, rgba(0,128,128, 0.95), transparent)'
      },
      
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}

