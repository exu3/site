module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        playfair: "Playfair Display, serif",
        mono: "IBM Plex Mono, monospace",
        sans: "IBM Plex Sans, sans-serif",
      },
      colors: {
        white: "#FFFEFD",
        black: "#181818",
      },
      keyframes: {
        "cursor-party": {
          "0%": {
            cursor: "grabbing",
          },
          "5%": {
            cursor: "grab",
          },
          "10%": {
            cursor: "zoom-out",
          },
          "15%": {
            cursor: "zoom-in",
          },
          "20%": {
            cursor: "all-scroll",
          },
          "25%": {
            cursor: "row-resize",
          },
          "30%": {
            cursor: "zoom-in",
          },
          "35%": {
            cursor: "text",
          },
          "40%": {
            cursor: "crosshair",
          },
          "45%": {
            cursor: "progress",
          },
          "50%": {
            cursor: "pointer",
          },
          "55%": {
            cursor: "context-menu",
          },
          "60%": {
            cursor: "none",
          },
          "65%": {
            cursor: "help",
          },
          "70%": {
            cursor: "vertical-text",
          },
          "75%": {
            cursor: "alias",
          },
          "80%": {
            cursor: "copy",
          },
          "85%": {
            cursor: "move",
          },
          "90%": {
            cursor: "no-drop",
          },
          "95%": {
            cursor: "pointer",
          },
          "100%": {
            cursor: "ew-resize",
          },
        },
      },
      animation: {
        "cursor-party": "cursor-party 3s infinite ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
