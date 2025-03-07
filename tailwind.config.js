/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      animation: {
        fumee: "fumee 3s ease-in-out infinite",
      },
      keyframes: {
        fumee: {
          "0%": { transform: "translateY(0) scaleX(1)" },
          "50%": { transform: "translateY(-5px) scaleX(1.05)", opacity: 0.6 },
          "100%": { transform: "translateY(0) scaleX(1)", opacity: 0.3 },
        },
      },
      colors: {
        customLight: "#F9F9F4",
        customBlue: "#0403FE",
      },
      fontFamily: {
        sri: ["Sriracha"],
      },
    },
  },
  plugins: [],
};
