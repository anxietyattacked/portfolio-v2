module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/images/1.jpg')",
        "hero-2": "url('/images/2.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
