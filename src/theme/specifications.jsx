export default {
  breakpoints: [ "576px", "768px", "992px", "1200px" ],
  mediaQueries: {
    sm: `@media screen and (min-width: 576px)`,
    md: `@media screen and (min-width: 768px)`,
    lg: `@media screen and (min-width: $992px)`,
    xl: `@media screen and (min-width: 1200px)`,
  },
  colors: {
    blue: ["#30abdf", "#358ED1", "#4298e8", "#4763C0"],
    green: ["#c5f9c6", "#05c605", "#129d20"],
    grey: ["#f0f0f2", "#999", "#474747", "#323232", "#272b34"],
    purple: "#9459ff",
    red: ["#fccdcd", "#ed2528", "#d30000"],
    transparent: "rgba(0,0,0,0)",
    white: "#fff",
  },
  fonts: "'Roboto', sans-serif",
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};;