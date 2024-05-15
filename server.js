const express = require("express")
const cors = require("cors")

const port = 3000
const app = express()

app.use(cors())


app.get("/", (req, res) => {
  res.send('<h1 style="color: red;">Demo site is running</h1>')
})

app.get("/products", (req, res) => {
  res.send([
    {
      "id": 1,
      "name": "car"
    },
    {
      "id": 2,
      "name": "bike"
    }
  ])
})

app.listen(port, () => {
  console.log("server is running on the port " + port);
})