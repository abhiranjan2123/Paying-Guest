/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/hero-image.svg')",
        'about': "url('./assets/aboutus-image.svg')",
      }
    },
  },
  plugins: [],
}