const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.jsx"],
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    publicPath: "/"
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./index.html" })
  ],

  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "postcss-loader", options: { sourceMap: true } },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              plugins: [require("autoprefixer")]
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif|woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader"
      },
      { test: /\.html$/, loader: "html-loader?attrs[]=video:src" },
      { test: /\.mp4$/, loader: "url-loader?mimetype=video/mp4" },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: [path.join(process.cwd(), "node_modules")]
      }
    ]
  }
};
