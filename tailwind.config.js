/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'titillium-web': ['Titillium Web', 'sans-serif']
      }
    }
  },
  plugins: []
};
