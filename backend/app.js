const express = require("express")

const app = express()

app.use(express.json())

const stockRoutes = require("./routes/stockRoutes")

app.use("/api/v1", stockRoutes)


module.exports = app