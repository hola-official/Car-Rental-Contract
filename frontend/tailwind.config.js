/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "false",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-bounce": "bounce 2s linear infinite",
        "spin-slow": "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};
