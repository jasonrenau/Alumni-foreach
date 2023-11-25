/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        cabin: ["Cabin", "sans-serif"],
      },
      animation: {
        "scale-slow": "scale-slow 2s infinite",
      },
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle, rgba(53,117,144,0.9) 40%, rgba(42,45,67,0.8) 100%)",
      },

      keyframes: {
        "scale-slow": {
          "0%, 100%": { transform: "scale(0.95)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      colors: {
        pmarine: {
          50: "#f4f6fa",
          100: "#e5e9f4",
          200: "#d2daeb",
          300: "#b3c2dd",
          400: "#8ea3cc",
          500: "#7387be",
          600: "#6070b0",
          700: "#5561a0",
          800: "#495184",
          900: "#3e456a",
          950: "#2a2d43",
        },
        pblue: {
          50: "#f1f9fe",
          100: "#e2f2fc",
          200: "#bfe5f8",
          300: "#86d2f3",
          400: "#46baea",
          500: "#27aae1",
          600: "#1181b8",
          700: "#0f6895",
          800: "#10587c",
          900: "#134967",
          950: "#0d2f44",
        },
        pgreen: {
          50: "#f2fbf8",
          100: "#d1f6ec",
          200: "#a4ebd9",
          300: "#6edac3",
          400: "#40c1a8",
          500: "#2cbaa2",
          600: "#1d8475",
          700: "#1b6a5f",
          800: "#1a554e",
          900: "#1a4741",
          950: "#092a27",
        },
        porange: {
          50: "#fff7eb",
          100: "#fde9c8",
          200: "#fbd28c",
          300: "#f9b350",
          400: "#f7941d",
          500: "#f1750f",
          600: "#f1750f",
          700: "#b1360c",
          800: "#902b10",
          900: "#762311",
          950: "#440f04",
        },
      },
    },
  },
  plugins: [],
};
