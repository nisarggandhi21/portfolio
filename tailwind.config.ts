import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: ["var(--font-serif)", "Georgia", "ui-serif", "serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        // Warm near-black palette, darker than the DevAtlas reference
        bg: "#0c0b09",
        surface: "#141210",
        raised: "#1b1916",
        line: "#2a2621",
        ink: "#efe8dc",
        muted: "#a39b8f",
        faint: "#6e675d",
        cream: "#efe6d4",
        accent: "#ef7b4d",
      },
      boxShadow: {
        // Hard offset shadow used on the featured card
        offset: "6px 6px 0 0 #efe6d4",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
