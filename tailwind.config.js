/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        bottom: "0px 6px 0px -1px rgba(95, 95, 95, 1)",
        bottomHover: "0px 0px 0px 0px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
