/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          sans: [ 'Poppins','sans-serif']
        },
                
        colors: {
          Salmon: '#ff7a7a',
          Green: '#38cc8c',
          Blue: '#6055a5',
          DarkBlue: '#3e3c49',
          Grayish: '#b9b6d3'
        },
        
        backgroundImage:{
          'BgImg': "url('./src/assets/bg-intro-desktop.png')"
        }
    },
  },
  plugins: [],
}