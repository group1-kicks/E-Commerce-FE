/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003F62",
        secondary: "#DDDBCB",
        btn: "#E5A018",
        btnh: "#ce9015",
        btns: "#1B9AAA",
        btnsh: "#1B8896",
        form: "#D8D8DD",
      },
    },
    daisyui: {
      themes: false,
    },
  },
  plugins: [require("daisyui")],
};
