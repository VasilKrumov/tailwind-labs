module.exports = {
  purge: {
    content: ["./src/**/*.jsx", "./index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif",
      },
    },
  },
  variants: {
      // will not overwrite but extend teh list of available variants
    extend: {
      // enables active state for bg color
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
