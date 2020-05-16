const path = require("path")
const webpack = require("webpack")
const express = require("express")

// middlewares
const devMiddleware = require("webpack-dev-middleware")
const hotMiddleware = require("webpack-hot-middleware")

// configs
const webpackConfig = require("./webpack.dev.config")
const serverConfig = require("./server.config")

const resolve = p => path.resolve(__dirname, "..", p)

const compiler = webpack(webpackConfig)
const app = express()

const devMiddlewareInstance = devMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: "minimal",
})

const hotMiddlewareInstance = hotMiddleware(compiler)

devMiddlewareInstance.waitUntilValid(() => {
  console.log(`server is listening on port ${serverConfig.port}`)
})

// handle fallback for HTML5 history API
// 必须在 devMiddleware 之前，否则没有效果
app.use(require("connect-history-api-fallback")())

app.use(devMiddlewareInstance)
app.use(hotMiddlewareInstance)

app.listen(serverConfig.port, () => {
  console.log(`Server listening start....`)
})
