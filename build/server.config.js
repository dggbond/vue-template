const path = require("path")

const resolve = p => path.resolve(__dirname, "..", p)

module.exports = {
  compress: true,
  port: 9000,
  host: "localhost",
  hot: true,
  overlay: true,
  stats: {
    colors: true,
  },
}
