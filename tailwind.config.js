/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: ["autofill"],
      colors: {
        accent: "black",
        accentFaded: "rgba(178, 177, 159, 0.5)",
        accentLower: "#c7c6b5",
        primary: "#E6E2CF",
        primaryFaded: "rgba(249, 248, 243, 0.5)",
        fadedBlack: "#373633",
        blackTrans: "#373633",
        bg: "#e7e1d7",
        bgDark: "#BDB7AF",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
        satoshi: ["Satoshi"],
        satoshiB: ["Satoshi-Bold"],
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
