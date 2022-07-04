const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["BR Firma", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        red: {
          350: "#FA4A84",
        },
        gray: {
          350: "#8397AB",
        },
        zinc: {
          150: "#EEEFF7",
          250: "#E0E2EC",
        },
        purple: {
          950: "#1C1335",
          960: "#1B003B",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tw-elements/dist/plugin")],
};
