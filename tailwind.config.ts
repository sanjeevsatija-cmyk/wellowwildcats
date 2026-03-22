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
        "green-deep":  "#142E14",
        "green-dark":  "#1D4A1D",
        "green-mid":   "#2A6B2A",
        "green-light": "#3A8C3A",
        "green-pale":  "#EBF4EB",
        "gold":        "#C9A030",
        "gold-bright": "#F0C040",
        "gold-pale":   "#FBF3DC",
        "cream":       "#F7F4EE",
        "charcoal":    "#1A1A1A",
        "wello-grey":  "#6B7280",
        "grey-light":  "#E5E7EB",
      },
      fontFamily: {
        serif:     ["'Playfair Display'", "Georgia", "serif"],
        sans:      ["'Barlow'", "sans-serif"],
        condensed: ["'Barlow Condensed'", "sans-serif"],
      },
      animation: {
        "slow-rotate":   "slowRotate 60s linear infinite",
        "slow-rotate-r": "slowRotate 80s linear infinite reverse",
        "slow-rotate-f": "slowRotate 45s linear infinite",
        "scroll-pulse":  "scrollPulse 2s ease-in-out infinite",
      },
      keyframes: {
        slowRotate:  { from:{transform:"rotate(0deg)"}, to:{transform:"rotate(360deg)"} },
        scrollPulse: { "0%,100%":{opacity:"0.3"}, "50%":{opacity:"1"} },
      },
      boxShadow: {
        "programs":   "0 20px 60px rgba(20,46,20,0.16)",
        "card-hover": "0 12px 32px rgba(20,46,20,0.14)",
        "gold-glow":  "0 8px 24px rgba(201,160,48,0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
