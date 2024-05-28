/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "em-pink": "#BD1550",
        "em-dark-pink": "#720D31",
        "em-purple": "#231B53",
        "em-yellow": "#FFC259",
        "em-dark-purple": "#1F1946",
        "em-light": "#F8F9FA",
      },
      keyframes: {
        marqueeDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        marqueeUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        marqueeDown: "marqueeDown 0s linear infinite",
        marqueeUp: "marqueeUp 0s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
