const express = require('express')
const { RunX } = require("./Lool")

const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', async function (req, res) {
  RunX(res, req)
})

app.listen(PORT)