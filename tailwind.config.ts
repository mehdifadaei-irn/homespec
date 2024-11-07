import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#354E37",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#D6A217",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        tundora: "#464646",
        alabaster: "#F7F7F7",
        "black-80": "#030303",
        "blue-ribbon": "#2E4CFF",
        "oslo-gray": "#8C8D90",
        java: "#18C5BF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      padding: {
        container: "3.125rem",
      },
      spacing: {
        "4.5": "1.125rem",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 1rem",
          width: "inherit",
          "@screen sm": {
            maxWidth: "100%",
            padding: "0 2rem",
            width: "inherit",
          },
          "@screen xl": {
            maxWidth: "77.875rem",
            padding: "0 0",
            width: "100%",
          },
        },
      });
    }),require("tailwindcss-animate")],
};
export default config;
