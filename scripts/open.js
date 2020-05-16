const open = require("open")
const serverConfig = require("../build/server.config")

open(`http://localhost:${serverConfig.port}`, { app: "google chrome" })
