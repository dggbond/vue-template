const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

const { HotModuleReplacementPlugin } = require("webpack")

const resolve = p => path.resolve(__dirname, "..", p)

module.exports = {
  mode: "development",

  entry: {
    app: resolve("src/main.js"),
    test: resolve("src/test.js"),
  },

  output: {
    filename: "[name].bundle.js",

    // used from dynamic import
    chunkFilename: "[name].bundle.js",

    path: resolve("dist"),
  },

  optimization: {
    // 可以将输出中相同的依赖抽离，这样可以缩小输出文件的大小。
    splitChunks: {
      chunks: "all",
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },

      {
        test: /\.(woff|woff2|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },

  // 添加 source map 开发时可以定位 error 以及 warning，仅开发时使用
  devtool: "inline-source-map",

  // dev server config
  devServer: {},

  plugins: [
    // 每次 build 之前清空 输出文件夹（当前是 dist）
    new CleanWebpackPlugin(),

    // HMR
    new HotModuleReplacementPlugin(),

    // 添加根 html 文件
    new HtmlWebpackPlugin({
      template: resolve("index.html"),
      filename: "index.html", // default
    }),
  ],
}
