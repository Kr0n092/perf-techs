import express from "express"
import cors from "cors"
import { renderToString } from "react-dom/server"
import App from '../shared/App'
import React from 'react'

const app = express()

app.use(cors())

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static("public"))
app.use('/images', express.static("/home/olivier/Projects/perf-techs/ssr/images"));

app.get("*", (req, res, next) => {
    const name = "Olivier";
    const markup = renderToString(
      <App />
    )
  
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR</title>
          <script src="/bundle.js" defer></script>
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </head>
  
        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `)
  })

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})