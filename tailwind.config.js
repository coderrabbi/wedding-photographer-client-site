/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImg: {
        aboutImage:
          "url('https://img.freepik.com/free-photo/close-up-view-male-hand-holding-professional-camera-street_8353-6510.jpg?w=740&t=st=1667896842~exp=1667897442~hmac=4765809cb914482b7b899a43991fd31e53becc2ecfcdfd99350714210bf873c4')",
      },
    },
  },
  plugins: [],
};
