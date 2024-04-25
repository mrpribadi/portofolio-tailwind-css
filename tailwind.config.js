/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#06b6d4",
        dark: "#0f172a",
        secondary: "#94a3b8",
        third: "#cbd5e1",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
