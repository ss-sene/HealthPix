const express = require('express')

const app = express ()

app.use(express.json())

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT)
  })