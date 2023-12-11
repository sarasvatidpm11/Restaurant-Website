/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/home.html',
    './public/index.html',
    './public/about.html'
  ],
  theme: {
    extend: {
      colors: {
        primary:'#7C0A02', //merah dark
        secondary: '#B22222', //merah light
        tertiary: '#F1BC31', //kuning
        quaternary: '#242121', //hitam
      },
      fontFamily: {
        'philosopher': ['Philosopher', 'sans-serif'],
        'port-lligat-sans': ['Port Lligat Sans', 'sans-serif'],
        'inspiration': ['Inspiration', 'cursive'],
      },
    },
  },
  plugins: [],
}

