module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
