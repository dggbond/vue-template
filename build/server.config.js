const defaultPort = 9000

const customPortIndex = process.argv.findIndex(arg => arg === "-p")
const customPort = process.argv[customPortIndex + 1]

module.exports = {
  port: customPortIndex === -1 ? defaultPort : Number(customPort),
}
