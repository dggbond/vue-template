const Webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")
const webpackConfig = require("./webpack.config")
const serverConfig = require("./server.config")

const compiler = Webpack(webpackConfig)

const server = new WebpackDevServer(compiler, serverConfig)

server.listen(serverConfig.port, serverConfig.host, () => {
  console.log("serve start")
})
