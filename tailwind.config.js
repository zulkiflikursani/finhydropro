import { nextui } from "@nextui-org/theme";
import { color } from "framer-motion";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        sectionOne: "url('/assets/images/gambar1.jpeg')",
        sectionTwo: "url('/assets/images/gambar2.jpeg')",
        sectionThree: "url('/assets/images/gambar3.jpeg')",
      },
      textShadow: {
        custom:
          "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
      },
    },
  },
  darkMode: "class",
  darkMode: "class",
  plugins: [
    nextui(),
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke-black": {
          color: "white",
          "-webkit-text-stroke": "3px black", // 1px red stroke
          "paint-order": "stroke fill",
        },
      });
    },
  ],
};
