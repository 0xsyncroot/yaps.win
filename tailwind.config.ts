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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Primary brand — indigo, centered on the logo mark (#4338ca === brand-600)
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7cffe",
          300: "#a5b0fc",
          400: "#8189f8",
          500: "#6366f1",
          600: "#4338ca",
          700: "#3730a3",
          800: "#2f2b83",
          900: "#282567",
          950: "#1a1745",
        },
        // Secondary accent — the logo's yellow square. Always paired with dark text.
        accent: {
          DEFAULT: "#facc15",
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "var(--font-sora)",
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 23, 42, 0.12)",
        card: "0 1px 3px rgba(15, 23, 42, 0.06), 0 12px 32px -16px rgba(67, 56, 202, 0.18)",
        lift: "0 2px 6px rgba(15, 23, 42, 0.06), 0 24px 48px -20px rgba(67, 56, 202, 0.28)",
        glow: "0 20px 60px -20px rgba(67, 56, 202, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(6deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
