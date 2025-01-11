/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        ts_md: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

