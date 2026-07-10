import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Branding from mikelmangold.com — gold accent on near-black
        ink: "#f5f5f3", // primary text (light, on dark)
        paper: "#0a0a0a", // page background (near-black)
        accent: "#c8a951", // brand gold
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
