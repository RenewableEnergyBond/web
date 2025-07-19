/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#236476',
        secondary: '#4A9F6D',
      },
      fontFamily: {
        'sans': ['Space Grotesk', 'Sans-serif'],
        'serif': ['Roboto Slab', 'Serif']
      }
    }
  },
  plugins: [],
}

