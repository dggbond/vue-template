const app = require("express")()

const defaultPort = 10000

const customPortIndex = process.argv.indexOf("-f")
const customPort = process.argv[customPortIndex + 1]

const port = customPortIndex === -1 ? defaultPort : Number(customPort)

const init = () => {
  app.listen(port, () => {
    const url = `http://localhost:${port}`

    console.log(`fake server is listening at ${url}`)
  })
}

app.get("*", (req, res) => {
  res
    .status(200)
    .end()
})

module.exports = {
  fakeServerOpen: false,
  fakeServerInit: init,
  fakeServerPort: port,
}
