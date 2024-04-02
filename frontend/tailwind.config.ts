import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#e3e5e7",
        input: "#e3e5e7",
        ring: "#2b364f",
        background: "#f7faff",
        foreground: "#020203",
        primary: {
          DEFAULT: "#2b364f",
          foreground: "#ececec",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
          foreground: "#1f1f20",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#fafafa",
        },
        muted: {
          DEFAULT: "#ebebec",
          foreground: "#6b6b6e",
        },
        accent: {
          DEFAULT: "#f5f5f5",
          foreground: "#1f1f20",
        },
        popover: {
          DEFAULT: "#dfe6f9",
          foreground: "#030303",
        },
        card: {
          DEFAULT: "#dfe6f9",
          foreground: "#030303",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config