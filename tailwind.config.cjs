/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        secondary: ['"Sofia Sans Extra Condensed"', "sans-serif"],
      },
      colors: {
        primary: {
          50: "#EDC58B",
          100: "FEBA34",
          200: "#DF5904",
          300: "#8E4F0A",
        },
        secondary: {
          50: "#fc4b08",
          100: "#1C626D",
          200: "#1FACE7",
          300: "#1A3176",
        },
      },
      animation: {
        fade: "fadeIn 1s ease-in-out",
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
