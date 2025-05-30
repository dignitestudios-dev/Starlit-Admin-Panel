/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      heading: "32px",
      subHeading: "22px",
      normal: "14px",
    },
    colors: {
      primary: "#224160",
      secondary: "#A9CBF3",
      base: "rgba(32, 34, 36, 1)",
      customGrey: "rgba(10, 21, 15, 0.5)",
      active: "#3FB743",
      inActive: "#989898",
      warning: "#C00000",
      pause: "#0095FF",
      secondaryLight: "#F5FAFF",
      light: "#868686",
      error: "#ff0033",
    },
    borderRadius: {
      small: "8px",
      normal: "16px",
      large: "24px",
      full: "100%",
    },
  },
  plugins: [],
};
