/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {colors:{
      'pp-bg-orage':'#FF9600',
      'pp-text-font':'#454545',
      'pp-border-input':'rgb(204, 204, 204)',
      'pp-logreg-button':'#808080',
      'pp-login-button':'#FF5400'
    }},
  },
  plugins: [],
};
