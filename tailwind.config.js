/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
     primary:' #66d8f5',
     ["nav-color"]:'#333'
      }
       
      
    },
  },
  plugins: [],
}