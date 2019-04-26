const path = require("path")

const resolve = p => path.resolve(__dirname, "..", p)

module.exports = {
  port: 9000,
  stats: "minimal",
}
