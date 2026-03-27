import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#fafaf8",
        dark: "#1c3829",
        "dark2": "#1A2E1F",
        accent: "#4ade80",
        "accent-light": "#d6f0df",
        text: "#1a1a18",
        muted: "#6A6059",
        dim: "#A09488",
        green: "#2D6A4A",
        "green-l": "#6DBF85",
        "green-xl": "#D6F0DF",
        border: "#E4DDD3",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
