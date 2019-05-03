const path = require("path")

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

const resolve = p => path.resolve(__dirname, "..", p)

module.exports = {
  entry: {
    app: [resolve("src/main.js")],
  },

  output: {
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".vue"],

    modules: [
      "node_modules",
      resolve("src"),
      resolve("components"),
    ],

    alias: {
      "@": resolve("src/pages"),
    },
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
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            exclude: /node_modules/,
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.pug$/,
        // pug plain loader 较轻量，仅限 Vue 组件形式的使用
        use: ["pug-plain-loader"],
      },

      {
        test: /\.styl(us)?/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "stylus-loader",
            options: {
              import: [resolve("src/config.styl")],
              import: [resolve("src/style.styl")],
            },
          },
        ],
      },

      {
        test: /\.vue$/,
        loader: "vue-loader",
      },

      // 用于 import 图片时，可以得到图片的绝对路径，一般不需要用到，字体也是
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
      template: resolve("index.html"),
      filename: "index.html", // default
    }),

    // 拷贝静态文件夹，不用任何处理
    new CopyWebpackPlugin([{
      from: "static",
      to: "static",
    }]),

    new VueLoaderPlugin(),
  ],
}
