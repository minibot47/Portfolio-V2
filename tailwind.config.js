module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-poppins)"],
        mono: ["var(--font-fira-code)"],
        display: ["var(--font-playfair)"],
        quintessential: ["var(--font-quintessential)"],
        londrina: ["var(--font-londrina-shadow)"]
      },
    },
  },
  plugins: [],
};
