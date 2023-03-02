/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {

        "primary": "#0D0D0D",

        "secondary": "#1A1919",

        "accent": "#262626",

        "neutral": "#000000",

        "base-100": "#FFFFFF",

        "info": "#0070F3",

        "success": "#21CC51",

        "warning": "#e11d48",

        "error": "#fde047",
        "--rounded-box": "0rem", // border radius rounded-box utility class, used in card and other large boxes
        "--rounded-btn": "0rem", // border radius rounded-btn utility class, used in buttons and similar element
        "--rounded-badge": "0rem", // border radius rounded-badge utility class, used in badges and similar
        "--animation-btn": "0.25s", // duration of animation when you click on button
        "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
        "--btn-text-case": "uppercase", // set default text transform for buttons
        "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
        "--border-btn": "1px", // border width of buttons
        "--tab-border": "1px", // border width of tabs
        "--tab-radius": "0.5rem", // border radius of tabs


      },
    }, ],
  },
}