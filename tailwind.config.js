/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gameBg: "url('/img/promoBackground.jpg')",
      },
    },
  },
  plugins: [],
};
