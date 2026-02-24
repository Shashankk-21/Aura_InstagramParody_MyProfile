/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enforce the custom colors
        'ig-bg': '#000000',
        'ig-text': '#F5F5F5',
        'ig-border': '#262626',
        'ig-primary': '#F5F5F5',
        'ig-secondary': '#A8A8A8',
        'ig-link': '#0095F6',
        'ig-button': '#363636',
        'ig-button-hover': '#262626',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
