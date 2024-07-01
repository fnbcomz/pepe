const express = require('express')
const { RunX } = require("./Lool")

const app = express()
const PORT = process.env.PORT || 4000;

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }));

app.get('/', async function (req, res) {
  RunX(res, req)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

// app.listen(PORT, async () => {
//   console.log(`Example app listening at http://localhost:${PORT}`)
//   ngrok.connect({ addr: PORT, authtoken: "2hBgpguJ5YGltFep0ySQevgZLQB_4DtXL7GMT69yMFraSuKRa" })
// })