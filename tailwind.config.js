module.exports = {
  content: [
    "./**/*.{html,js}",
    // "./src/**/*.{html,js}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#0279b9",
        secondary: "#F4F4F4",
        accent: "#fcbf49",
        lightPurple: "#a60874",
        lightGreen: "#7bffb3",
        dark: "#121212",
      },
      fontFamily: {
        main: ["ui-sans-serif", "system-ui"],
        sans: ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        script: ["Caveat", "cursive"],
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "2-5rem",
          xl: "3rem",
          "2xl": "5rem",
        },
        center: true,
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
