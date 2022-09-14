/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif",
        arima: "Arima, cursive",
      },
      colors: {
        cgreen: "#00b295",
        cblack: "#191516",
      },
      keyframes: {
        "sidebar-in": {
          "0%": { opacity: "0%", left: "-30%" },
          "50%": { opacity: "60%", left: "-10%" },
          "100%": { opacity: "100%" },
        },
        "sidebar-out": {
          "0%": { opacity: "100%" },
          "50%": { opacity: "60%", left: "-10%" },
          "100%": { opacity: "0%", left: "-30%" },
        },
      },
      animation: {
        "sidebar-in": "sidebar-in 0.5s",
        "sidebar-out": "sidebar-out 0.5s",
      },
    },
  },
  plugins: [],
};
