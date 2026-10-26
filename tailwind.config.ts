import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#07111F", navy: "#0B1730", electric: "#145CFF", royal: "#2563EB",
        mist: "#EAF2FF", slate: "#64748B", charcoal: "#111827",
      },
      fontFamily: { sans: ["Poppins", "system-ui", "sans-serif"] },
      boxShadow: { lift: "0 24px 60px -24px rgba(11,23,48,.35)", glow: "0 0 0 1px rgba(20,92,255,.35), 0 18px 50px -18px rgba(20,92,255,.55)" },
    },
  },
  plugins: [],
};
export default config;
