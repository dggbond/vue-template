const qs = require("querystring")

// plugins
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin")
const { HotModuleReplacementPlugin } = require("webpack")

const webpackBaseConfig = require("./webpack.base.config")

const merge = require("webpack-merge")

// Hot middleware need
const { entry } = webpackBaseConfig

const hotMidOptions = {
  reload: true,
  quiet: true,
}

Object.keys(entry).forEach(key => {
  entry[key].push(`webpack-hot-middleware/client?${qs.stringify(hotMidOptions)}`)
})

module.exports = merge(webpackBaseConfig, {
  mode: "development",

  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new FriendlyErrorsWebpackPlugin(),

    new HotModuleReplacementPlugin(),
  ],
})
