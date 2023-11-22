import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "footer-image": "url('/img/image-2411.png')",
      },
      colors: {
        brand: "#2D1E6B",
        purple: "#6542F4",
        pink: "#F976FF",
        "pink-dark": "#DD00B8",
        magenta: "#B50098",
      },
      fontFamily: {
        display: ["Ondo"],
        body: ["Lato"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
