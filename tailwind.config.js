module.exports = {
  content: [
    "*.html",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        25: "100px",
      },
      colors: {
        primary: "#677ea4",
        secondary: "#f5d486",
      },
      fontSize: {
        h1: ["72px", "98px"],
        h2: ["48px", "64px"],
        h6: ["20px", "30px"],
        lead1: ["18px", "32px"],
        body1: ["16px", "26px"],
        description: "24px",
      },
      fontFamily: {
        abc: "Sixtyfour Convergence",
        xyz: "Sixtyfour Convergence"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}