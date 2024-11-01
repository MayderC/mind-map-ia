import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");


const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor : {
        "primary-blue": "#1D2445",
        "primary-dark": "#1E1E1E",
        "primary-light": "#D9D9D9",
      },
      textColor: {
        "primary-blue": "#1D2445",
        "primary-dark": "#1E1E1E",
        "primary-light": "#D9D9D9",
        "secondary-dark": "#4C4D53",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
