/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#b2b19f;",
        accentFaded: "rgba(178, 177, 159, 0.5)",
        primary: "#f9f8f3",
        primaryFaded: "rgba(249, 248, 243, 0.5)",
        fadedBlack: "#373633",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
        rubik: ["Rubik"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};