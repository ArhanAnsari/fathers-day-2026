/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#000000",
        surface: "#050505",
        accent: {
          DEFAULT: "#87CEEB",
          secondary: "#A7D8F5"
        },
        mutedText: "#A0A0A0",
        border: "rgba(255, 255, 255, 0.08)",
        glass: "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        sans: ["var(--font-sf-pro)", "system-ui", "sans-serif"],
        serif: ["var(--font-new-york)", "Georgia", "serif"],
      },
      boxShadow: {
        'luxury': '0 30px 60px -15px rgba(0, 0, 0, 0.8)',
        'glass-inner': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}