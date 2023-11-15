module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1350px",
    },
    colors: {
      primary: {
        DEFAULT: "#2F58CD",
        dark: "#2B3467",
      },
      gray: {
        DEFAULT: "#414042",
        100: "#F6F6F6",
        200: "#BCB8BB",
      },
      danger: {
        DEFAULT: "#E81313",
      },
      white: {
        DEFAULT: "#FFF",
      }
    },
    extend: {
    
    },
  },
};
