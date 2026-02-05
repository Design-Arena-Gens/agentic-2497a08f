import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          900: "#040914",
          800: "#0b1628"
        },
        cobalt: {
          500: "#2563eb",
          600: "#1d4ed8"
        },
        amber: {
          400: "#fbbf24",
          500: "#f59e0b"
        }
      },
      fontFamily: {
        heading: ["'Poppins'", "sans-serif"],
        body: ["'Inter'", "sans-serif"]
      },
      boxShadow: {
        glow: "0 10px 40px rgba(37, 99, 235, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
