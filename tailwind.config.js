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
        smoke: "smoke 5s ease-in-out infinite",
      },
      keyframes: {
        smoke: {
          "0%": { backgroundPosition: "0 0" },
          "50%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "0 0" },
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
