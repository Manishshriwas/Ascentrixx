/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e8f4ff",
          100: "#c3e0ff",
          200: "#85bfff",
          300: "#4d9eff",
          400: "#1a7dff",
          500: "#0060e6",
          600: "#004ab5",
          700: "#003584",
          800: "#002053",
          900: "#000d22",
        },
        accent: {
          400: "#00d4ff",
          500: "#00b8e0",
        },
        dark: {
          900: "#020818",
          800: "#060f24",
          700: "#0a1830",
          600: "#0e2040",
        },
      },
      fontFamily: {
        heading: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        pulse2: "pulse2 3s ease-in-out infinite",
        "slide-in-left": "slideInLeft 0.6s ease forwards",
        "slide-in-right": "slideInRight 0.6s ease forwards",
        "spin-slow": "spin 20s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0,212,255,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0,212,255,0.7)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
