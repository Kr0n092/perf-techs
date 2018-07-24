const express = require("express");
const cors = require("cors");

const app = express()

app.use(cors())

app.use(express.static("public"))
app.use('/images', express.static("/home/olivier/Projects/perf-techs/resource-hints/default/images"));

app.get("/", (req, res, next) => {
    res.sendFile("/home/olivier/Projects/perf-techs/resource-hints/default/index.html");
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})