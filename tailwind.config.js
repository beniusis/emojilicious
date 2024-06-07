/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'emoji-yellow': 'rgb(255, 200, 61)'
      }
    }
  },
  plugins: []
};
