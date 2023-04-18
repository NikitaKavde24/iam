/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      iamblue: {
        DEFAULT: "#295D93",
        100: "#83AFDC",
        200: "#639AD3",
        300: "#4386CB",
        400: "#3271B3",
        500: "#295D93",
        600: "#1D4167",
        700: "#11253B",
        800: "#040A0F",
        900: "#000000",
        950: "#000000",
      },
      iamgray: {
        DEFAULT: "#F6F6F6",
        50: "#767676",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#FFFFFF",
        500: "#F6F6F6",
        600: "#DADADA",
        700: "#BEBEBE",
        800: "#aaaaaa",
        900: "#868686",
        950: "#787878",
      },
      iamblack:{
        DEFAULT: "#0A0E1B",
        50: "#242424",
      },
      iamwhite:"#FFFFFF"
    },
    extend: {},
  },
  plugins: [],
};
