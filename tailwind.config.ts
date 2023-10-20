import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        custom: "868px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF8A00",
          secondary: "#2A293B",
          accent: "#629E5F",
          neutral: "#27303a",
          "base-100": "#e5deed",
          info: "#6199d1",
          success: "#6bdb98",
          warning: "#f7d84a",
          error: "#ef4e76",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
