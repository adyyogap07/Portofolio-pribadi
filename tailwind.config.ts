import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        border: "var(--border)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        primary: {
          DEFAULT: "var(--primary)",
          light: "#2563EB",
          dark: "#3B82F6",
        },
        accent: {
          DEFAULT: "var(--accent)",
          light: "#06B6D4",
          dark: "#22D3EE",
        },
        success: {
          DEFAULT: "var(--success)",
          light: "#16A34A",
          dark: "#22C55E",
        },
        danger: {
          DEFAULT: "var(--danger)",
          light: "#DC2626",
          dark: "#EF4444",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
