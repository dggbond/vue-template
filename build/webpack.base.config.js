const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

const resolve = p => path.resolve(__dirname, "..", p)

module.exports = {
  entry: {
    app: resolve("src/main.js"),
    test: resolve("src/test.js"),
  },

  output: {
    filename: "[name].[hash].js",

    // used from dynamic import
    chunkFilename: "[name].bundle.js",
  },

  optimization: {
    // 可以将输出中相同的依赖抽离，这样可以缩小输出文件的大小。
    splitChunks: {
      chunks: "all",
    },
  },

  module: {
    // 这里的 rule 所使用的 loader 仅当使用 import 引入时才需要用到
    rules: [
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-env"],
      //     },
      //   },
      // },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      // 用于 import 图片时，可以得到图片的绝对路径，一般不需要用到
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
    // 添加根 html 文件
    new HtmlWebpackPlugin({
      template: resolve("index.html"),
      filename: "index.html", // default
    }),
  ],
}
