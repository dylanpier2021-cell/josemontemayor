import type { Config } from "tailwindcss";

/**
 * Warm, trustworthy palette: deep navy + forest greens, a warm sun accent,
 * and a cream background. A subtle veteran nod lives in the muted slate tones.
 * Adjust the brand colors here once and they cascade across the whole site.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0b2545",
          dark: "#081a33",
          light: "#13315c",
          soft: "#1d3a63",
        },
        ocean: {
          DEFAULT: "#1d4e89",
          light: "#3a6ea5",
        },
        forest: {
          DEFAULT: "#1b4332",
          mid: "#2d6a4f",
          light: "#40916c",
        },
        sun: {
          DEFAULT: "#f4a300",
          soft: "#fbbf3b",
          deep: "#d98a00",
        },
        cream: {
          DEFAULT: "#fbf7ef",
          dark: "#f3ecdd",
        },
        ink: "#1f2933",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(11, 37, 69, 0.18)",
        lift: "0 24px 50px -20px rgba(11, 37, 69, 0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        "sun-rays":
          "radial-gradient(circle at 50% -20%, rgba(244,163,0,0.18), transparent 60%)",
      },
      maxWidth: {
        prose: "70ch",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
