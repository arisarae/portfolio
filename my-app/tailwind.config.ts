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
        "baby-blue": "#DBF0F8",
        "light-blue": "#ACDCEE",
        "teal": "#87C0CD",
        "coral": "#FF8B8B",
        "red": "#FF5151",
        "dark-blue": "#226597",
        "navy": "#000249",
      },
      fontFamily: {
        "lexend-100": ["Lexend-100", "sans-serif"],
        "lexend-200": ["Lexend-200", "sans-serif"],
        "lexend-300": ["Lexend-300", "sans-serif"],
        "lexend-400": ["Lexend-400", "sans-serif"],
        "lexend-500": ["Lexend-500", "sans-serif"],
        "lexend-600": ["Lexend-600", "sans-serif"],
        "lexend-700": ["Lexend-700", "sans-serif"],
        "lexend-800": ["Lexend-800", "sans-serif"],
        "lexend-900": ["Lexend-900", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
