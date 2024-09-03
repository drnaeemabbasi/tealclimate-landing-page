/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "tc-green": "#00cc9c",
        "tc-dark-green": "#025e49",
        "tc-light-green": "#d8fff6",
        "tc-blue": "#197ec6",
        "tc-grey": "#d9d9d9",
        "tc-light-grey-1": "#f9f9f9",
        "tc-light-grey-2": "#f8f8f8",
        "tc-dark": "#111111",
      },
    },
  },
  plugins: [],
};
