// plugins
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin")

const webpackBaseConfig = require("./webpack.base.config")

const merge = require("webpack-merge")

module.exports = merge(webpackBaseConfig, {
  mode: "development",

  devtool: "inline-source-map",

  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        message: ["success"],
      },
    }),
  ],
})
