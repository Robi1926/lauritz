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
      black: "#000000",
      green: "#008011",
      greenhover: "#00660E",
      yellow: "#CC9B14",
      yellowhover: "#B38812",
      beige: "#F5F5F5",
    },
    fontSize: {
      h1: "3.052rem",
      h2: "2.441rem",
      h3: "1.953rem",
      h4: "1.563rem",
      h5: "1.25rem",
      action: "1rem",
      body: "1rem",
      "action-sm": "0.8rem",
      "body-sm": "0.8rem",
      tag: "0.64rem",
    },
    fontWeight: {
      semibold: "600",
      medium: "500",
      regular: "400",
    },
    fontFamily: {
      lauritz: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
