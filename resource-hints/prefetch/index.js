const express = require("express");
const cors = require("cors");

const app = express()

app.use(cors())

app.use(express.static("public"))
app.use('/images', express.static(__dirname + "/images"));

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3001, () => {
  console.log(`Server is listening on port: 3001`)
})