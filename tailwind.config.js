module.exports = {
  theme: {
    extend: {
      colors: {
        "cw-navy": "#022b31",
        "cw-dark-teal": "#035259",
        "cw-orange": "#f28705",
        "cw-cyan": "#03a696",
        "cw-blood-orange": "#f25c26",
        "cw-cream": "#f2e8cb"
      },
      scale: {
        "200": "2"
      },
      opacity: {
        "15": "0.15"
      }
    },
    container: {
      center: true,
      padding: "1rem"
    }
  },
  variants: {
    textColor: ["hover", "group-hover"],
    transform: ["hover", "group-hover"],
    scale: ["hover", "group-hover"]
  },
  plugins: []
};
