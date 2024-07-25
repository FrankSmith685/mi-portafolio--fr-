/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        waving: "waving 1s infinite",
        typing: "typing 3s steps(40, end)",
        erasing: "erasing 1.5s steps(40, end) 1.5s",
      },
      keyframes: {
        waving: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        typing: {
          "0%": { width: "0" },
          "50%": { width: "100%" },
          "100%": { width: "100%" },
        },
        erasing: {
          "0%": { width: "100%" },
          "50%": { width: "100%" },
          "100%": { width: "0" },
        },
      },
    },
  },
  plugins: [],
}
