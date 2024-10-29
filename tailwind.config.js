/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "active-1": "hsl(249, 99%, 64%)",
        "active-2": "hsl(278, 94%, 30%)",
        "light-violet-gray": "hsl(270, 3%, 87%)",
        "violet-gray": "hsl(279, 6%, 55%)",
        "dark-violet": "hsl(278, 68%, 11%)"
      },

      backgroundImage: {
        "main-desktop": "url('/assets/images/bg-main-desktop.png')",
        "main-mobile": "url('/assets/images/bg-main-mobile.png')",
        "front-card": "url('/assets/images/bg-card-front.png')",
        "back-card": "url('/assets/images/bg-card-back.png')"
      },

      fontFamily: {
        primary: ["Space Grotesk", "sans-serif"]
      },
      
      screens: {
        "wide": "1440px"
      }

    },
  },
  plugins: [],
}

