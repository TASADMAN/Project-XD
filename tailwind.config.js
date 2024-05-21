/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        limegreen:'#c9f31d'
      },
      fontFamily:{
        ubuntu:['Ubuntu Sans', 'sans-serif']
      }
    },
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1024px',
    },
    plugins: [],
  }
}
