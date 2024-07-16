import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [],
};
export default config;
