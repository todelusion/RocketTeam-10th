/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#56C4C5',
        'second': '#FF5D50',
        'third': '#F5CA52',
        'dark': '#221E1F',
        'lightDark': '#747474'
      },
      screens: {
        'sm':'375px',
        'xl':'1366px'
      }
    },
    fontFamily: {
      sans: ['Noto Sans TC','Roboto'],
      serif: ['Noto Serif TC','Times'],
      dela: ['Dela Gothic One']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
