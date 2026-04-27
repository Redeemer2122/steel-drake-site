import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        surface: "var(--bg-surface)",
        elevated: "var(--bg-elevated)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(48px, 8vw, 120px)", { lineHeight: "0.95" }],
        section: ["clamp(36px, 5vw, 72px)", { lineHeight: "1.1" }],
      },
    },
  },
  plugins: [],
};

export default config;
