const path = require("path")
// plugins
const webpackBaseConfig = require("./webpack.base.config")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const merge = require("webpack-merge")

const resolve = p => path.resolve(__dirname, "..", p)

module.exports = merge(webpackBaseConfig, {
  mode: "production",

  output: {
    path: resolve("dist"),

    filename: "js/[name].[contenthash].js",

    // used from dynamic import
    chunkFilename: "js/[name].[contenthash].chunk.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: resolve("index.html"),
      filename: "index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].chunk.css",
    }),
  ],
})
