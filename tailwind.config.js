/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        lofi: {
          primary: "#808089",

          secondary: "#4d4d4d",

          accent: "#1a1a1a",

          neutral: "#f2f2f3",

          "base-100": "#ffffff",
          "base-200": "#ffffff",
          "base-300": "#ffffff",
          "base-content": "#7d7d7d",

          info: "#1c92f2",
          success: "#15843c",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
