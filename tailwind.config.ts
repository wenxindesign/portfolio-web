import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#171717",
        secondary: "#666666",
        accent: "#7c6cad",
        background: "#f5f5f5",
        surface: "#ffffff",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        thicccboi: ['"THICCCBOI"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
