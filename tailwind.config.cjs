/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFF",
      greylight: "#C7C7C7",
      "grey-light-hover": "#ADADAD",
      greydark: "#474747",
      brand: "#CD0136",
      white: "#FFFFFF",
      black: "#00000",
      green: "##008011",
      greenhover: "#00660E",
      yellow: "#CC9B14",
      yellowhover: "#CC9B14",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
