const Webpack = require("webpack")
const express = require("express")
const webpackConfig = require("./webpack.dev.config")
const serverConfig = require("./server.config")

const compiler = Webpack(webpackConfig)
const app = express()

console.log(app)
