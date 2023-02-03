/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#0f0e17",
        headline: "#fafaf9",
        lightB: "#1c1d1c",
        paragraph: "#a7a9be",
        badge: "#e8e4e6",
        green: "#1a8525",
        dimGreen: "rgba(37, 151, 9, 0.4)",
      },
      screens: {
        xxs: "320px",
        xs: "640px",
        sm: "768px",
        md: "1060px",
        lg: "1280px",
        xl: "1540px",
        xxl: "1940px",
      },
    },
  },
  plugins: [],
};
