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
        xs: "570px",
        "2xs": "390px",
      },
      backgroundImage: {
        delivery: "url('/delivery-bg.png')",
        burger: "url('/burger-img.png')",
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
          "base-100": "#fff",
          info: "#6199d1",
          success: "#6bdb98",
          warning: "#f7d84a",
          error: "#ef4e76",
          blur: "#e5deed",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
