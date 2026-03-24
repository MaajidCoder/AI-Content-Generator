/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#1a1a1a',
        primary: '#3b82f6',
        primaryHover: '#2563eb',
        text: '#ededed',
        textSecondary: '#a3a3a3',
      }
    },
  },
  plugins: [],
}
