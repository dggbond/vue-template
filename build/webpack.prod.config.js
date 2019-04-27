// plugins
const webpackBaseConfig = require("./webpack.base.config")
const CleanWebpackPlugin = require("clean-webpack-plugin")

const merge = require("webpack-merge")
const path = require("path")

const resolve = p => path.resolve(__dirname, "..", p)

module.exports = merge(webpackBaseConfig, {
  mode: "production",

  output: {
    path: resolve("dist"),
  },

  plugins: [
    new CleanWebpackPlugin(),
  ],
})