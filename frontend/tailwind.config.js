/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      'Averia' : ['Averia Serif Libre'],
      'Courgette' : ['Courgette']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': 'url(../img/menu.jpg)',
      },
    },
  },
  plugins: [],
}