export default {
  breakpoints: [ "576px", "768px", "992px", "1200px" ],
  mediaQueries: {
    sm: `@media screen and (min-width: 576px)`,
    md: `@media screen and (min-width: 768px)`,
    lg: `@media screen and (min-width: $992px)`,
    xl: `@media screen and (min-width: 1200px)`,
  },
  colors: {
    logikcullTransparentBackground: "rgba(232,242,248,.6)",
    logikcullTransparentBackground_2: "rgba(232,242,248,.9)",
    logikcullButtonBlue: "#306e83",
    logikcullButtonBlue_hover: "#4691a9",
    logikcullButtonRed: "#c2493d",
    logikcullButtonRed_hover: "#e75243",
    logikcullText: "#555",
    logikcullTextDarkBlue: "#2b3e50",
    logikcullTextLightBlue: "#4691a9",
    conditionColors: ["#05c605", "#72df72", "#808080", "#ffa500", "#d30000"]
  },
  fonts: "'Roboto', sans-serif",
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};