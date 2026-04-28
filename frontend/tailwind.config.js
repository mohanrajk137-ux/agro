/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10b981", // Emerald 500
        dark: "#020617", // Slate 950
        "dark-accent": "#0f172a", // Slate 900
      }
    },
  },
  plugins: [],
}
