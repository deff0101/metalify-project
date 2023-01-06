/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-gray': '#b3b3b3',
        'nav-black':'#000',
        'dark-gray':'#181818',
        'dark-content':'#121212',
        'spotify-green':'#1D8954',
        'spotify-green-light': '#2bc77c',
        'spotify-black':'#191414',
        'nav-active':'#282828',
        'sidenav-active': '#282828'
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}