/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-dark": "#404040",
        "base-light": "#E2E2E2",
        main: "#AF0404",
        accent: "#141313",
      },
      fontFamily: {
        florisha: ["florishaBold"],
        montserrat: ["Montserat"],
      },
    },
  },
  plugins: [],
};
