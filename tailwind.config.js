/** @type {import('tailwindcss').Config} */
// import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "tc-green": "#00cc9c",
        "tc-dark-green": "#025e49",
        "tc-light-green": "#d8fff6",
        "tc-blue": "#197ec6",
        "tc-light-blue": "#e0f2ff",
        "tc-grey": "#d9d9d9",
        "tc-light-grey-1": "#f9f9f9",
        "tc-light-grey-2": "#f8f8f8",
        "tc-dark": "#111111",
      },
      // screens: {
      //   xs: "375px",
      //   ...defaultTheme.screens,
      // },
    },
  },
  plugins: [],
};
