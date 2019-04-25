const path = require("path")
const resolve = p => path.resolve(__dirname, "..", p)

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    app: resolve("src/main.js"),
    test: resolve("src/test.js"),
  },

  output: {
    filename: "[name].bundle.js",
    path: resolve("dist"),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: ["file-loader"],
      // },

      // {
      //   test: /\.(woff|woff2|ttf|otf)$/,
      //   use: ["file-loader"],
      // },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      base: resolve("index.html"),
      filename: "index.html", // default
    })
  ],
}
