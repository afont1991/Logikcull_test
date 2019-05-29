const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-object-rest-spread",
  "@quickbaseoss/babel-plugin-styled-components-css-namespace",
  "babel-plugin-styled-components",
  "babel-plugin-redux-saga"
];

const presets =  [
  "@babel/preset-react",
  "@babel/preset-env",
];

if (process.env.NODE_ENV !== "production") {
  // only add this when in development
  plugins.push("react-hot-loader/babel");
}

module.exports = { presets, plugins };