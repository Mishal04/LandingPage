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
        charcoal: {
          DEFAULT: "#1F2124",
          50: "#363A3F",
          100: "#2F3337",
          200: "#2A2D32",
          300: "#24272B",
          border: "#34383E",
          dark: "#16181A",
        },
        offwhite: {
          DEFAULT: "#F6F4EF",
          card: "#FFFFFF",
          muted: "#EFECE5",
          border: "#E2DDD4",
          darker: "#D5CFBF",
        },
        warmgray: {
          DEFAULT: "#8A857D",
          light: "#A49F97",
          dark: "#5C5852",
        },
        accent: {
          DEFAULT: "#A8834A",
          hover: "#93713D",
          light: "#C29E65",
          muted: "rgba(168, 131, 74, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
