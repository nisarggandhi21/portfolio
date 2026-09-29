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
        serif: ["var(--font-literata)", "Georgia", "Cambria", "ui-serif", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        primary: "var(--content-primary)",
        secondary: "var(--content-secondary)",
        background: "var(--background)",
        code: "var(--code-background)",
        line: "var(--code-border)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
