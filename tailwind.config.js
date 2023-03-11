/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "620px",
      md: "768px",
      lg: "976px",
      xl: "1450px",
      s: "400px",
    },
    extend: {
      backgroundImage: {
        me: "url('C:\\Users\\USER\\Downloads\\Pro\\React\\my-project\\src\\images\\background.jpg')",
      },
    },
  },
  plugins: [],
};
