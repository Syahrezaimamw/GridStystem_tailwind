/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {

   
      animation:{
        'muter-lambat':'spin 3s linear infinite',
        'yaya':'wiggle 3s linear infinite'
      },
      keyframes: {
        
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
    },
    transitionDuration: {
      '800': '800ms',
    },
    },
  },
  plugins: [],
}

