import daisyui from "daisyui"


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#fbf8fb',
          '100': '#f7f0f7',
          '200': '#ede0ee',
          '300': '#e0c7e0',
          '400': '#cda5cd',
          '500': '#b580b5',
          '600': '#925d91',
          '700': '#7d4e7b',
          '800': '#674165',
          '900': '#563954',
          '950': '#351d33',
      },
      
      },
    },
  },
  plugins: [daisyui],
  daisyui: {  
    themes: ["retro"],
  },
}