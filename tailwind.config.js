/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        limegreen: '#c9f31d',
        primary: '#fea928',
        secondary: '#ed8900',
        third: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}

      },
      fontFamily: {
        ubuntu: ['Ubuntu Sans', 'sans-serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        }
      }
    },
    // screens: {
    //   'sm': '576px',
    //   'md': '960px',
    //   'lg': '1024px',
    // },
    plugins: [],
  }
}
