import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1180px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        navy: {
          950: "#020B1D",
          900: "#06152E",
          800: "#0A2144"
        },
        gold: {
          500: "#D8AF4F",
          300: "#F3D98B"
        },
        ivory: "#F8F5EF",
        graphite: "#5F6673",
        strength: "#2C9B74",
        priority: "#B85454"
      },
      fontFamily: {
        sans: ["Inter", "Avenir Next", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        premium: "0 28px 80px rgba(2, 11, 29, 0.34)",
        gold: "0 16px 48px rgba(216, 175, 79, 0.18)"
      },
      backgroundImage: {
        "gold-sheen": "linear-gradient(135deg, #F3D98B 0%, #D8AF4F 42%, #fff1bd 55%, #A87824 100%)"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        },
        pulseLine: {
          "0%, 100%": { strokeDashoffset: "180" },
          "50%": { strokeDashoffset: "20" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        shimmer: "shimmer 4.8s ease-in-out infinite",
        pulseLine: "pulseLine 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
