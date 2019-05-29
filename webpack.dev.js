const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

console.log("Running webpack.dev.js");

module.exports = merge(common, {
  mode: "development",

  // Enable sourcemaps for debugging webpack output
  devtool: "source-map",

  // Webpack dev server
  devServer: {
    compress: true,
    contentBase: "./dist",
    // Fall back browser history api
    historyApiFallback: true,
    // Enable hot reloading
    hot: true,
  },

  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },

  plugins: [
    // Required for hot reload
    new webpack.NamedModulesPlugin(),
    // Required for hot reload
    new webpack.HotModuleReplacementPlugin(),
    // Required for build analyzing (Set to true if you want to see it)
    new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerMode: "static" }),
  ]
});
