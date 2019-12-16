const path = require("path")
const webpack = require("webpack")
const express = require("express")
const open = require("open")

// middlewares
const devMiddleware = require("webpack-dev-middleware")
const hotMiddleware = require("webpack-hot-middleware")
const proxyMiddleware  = require("http-proxy-middleware")

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
  const url = `http://localhost:${serverConfig.port}`

  if(!process.argv.includes("-n")) {
    open(url, { app: "google chrome" })
  }

  console.log(`dev server is now listening at ${url}`)
})

app.use(devMiddlewareInstance)
app.use(hotMiddlewareInstance)

// http proxy
Object.keys(serverConfig.proxyTable).forEach(key => {
  app.use(key, proxyMiddleware(serverConfig.proxyTable[key]))
})

app.listen(serverConfig.port, () => {
  console.log(`Server listening start....`)
})
