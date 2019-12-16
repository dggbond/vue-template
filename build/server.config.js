const defaultPort = 9000

const customPortIndex = process.argv.indexOf("-p")
const customPort = process.argv[customPortIndex + 1]

const port = customPortIndex === -1 ? defaultPort : Number(customPort)

module.exports = {
  port,

  proxyTable: {
    "/api": {
      target: "http://localhost",
      changeOrigin: true,
    },
  },
}
