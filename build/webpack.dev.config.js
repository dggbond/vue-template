// plugins
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin")
const { HotModuleReplacementPlugin } = require("webpack")

const webpackBaseConfig = require("./webpack.base.config")

const merge = require("webpack-merge")

module.exports = merge(webpackBaseConfig, {
  mode: "development",

  devtool: "inline-source-map",

  plugins: [
    // HMR
    new HotModuleReplacementPlugin({
      log: false,
    }),

    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        message: ["success"],
      },
    }),
  ],
})
