const { urlObjectKeys } = require("next/dist/shared/lib/utils");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgray: "#8C8C8C",
        contactbg: "#333333",
        orangebg: "#FF5B38",
      },

      backgroundImage: {
        main: "url('/background.svg')",
      },
    },
  },
  plugins: [],
};
