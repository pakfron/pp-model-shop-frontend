/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pp-bg-orage": "#FF9600",
        "pp-text-font": "#454545",
        "pp-bg-gray": "#F8F8F8",
        "pp-border-input": "rgb(204, 204, 204)",
        "pp-logreg-button": "#808080",
        "pp-login-button": "#FF5400",
        "pp-gray-btn-account": "rgb(238, 238, 238)",
        "pp-gray-btn-font": "rgb(119, 119, 119)",
      },
    },
  },
  plugins: [],
};
