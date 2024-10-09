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
        'room-pattern' : 'url(../img/room1.jpg)',
        'gallery-patter' : 'url(../img/menu2.jpg)',
        'room-pattern2' : 'url(../img/restaurant2.jpg)',
        'promo-pattern' : 'url(../img/bumbu.jpg)',
        'reservation-pattern' : 'url(../img/bg-reservation.jpg)'
      },
    },
  },
  plugins: [],
}