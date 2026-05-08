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
        dark: "rgb(var(--bg-main))", 
        "dark-accent": "rgb(var(--bg-main))",
        white: "rgb(var(--text-main))",
        slate: {
          50: "rgb(var(--text-main))",
          100: "rgb(var(--text-main))",
          200: "rgb(var(--text-main))",
          300: "rgb(var(--text-muted))",
          400: "rgb(var(--text-muted))",
          500: "rgb(var(--text-muted))",
          600: "rgb(var(--text-muted))",
          700: "rgb(var(--text-muted))",
          800: "rgb(var(--text-muted))",
          900: "rgb(var(--bg-main))",
          950: "rgb(var(--bg-main))",
        }
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
