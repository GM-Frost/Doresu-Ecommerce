/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "dark",
      "cupcake",
      {
        // cupcake: {
        //   primary: "#793ef9",
        //   "primary-content": "#ffffff",
        //   secondary: "#f000b8",
        //   "secondary-focus": "#bd0091",
        //   "secondary-content": "#ffffff",
        //   accent: "#37cdbe",
        //   "accent-focus": "#2aa79b",
        //   "accent-content": "#ffffff",
        //   neutral: "#2a2e37",
        //   "neutral-focus": "#16181d",
        //   "neutral-content": "#ffffff",
        //   "base-100": "#3d4451",
        //   "base-200": "#2a2e37",
        //   "base-300": "#16181d",
        //   "base-content": "#ebecf0",
        //   info: "#66c6ff",
        //   success: "#87d039",
        //   warning: "#e2d562",
        //   error: "#ff6f6f",
        // },
      },
    ],
  },
};
