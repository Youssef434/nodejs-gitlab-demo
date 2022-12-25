const express = require('express')
const app = express()

const PORT = process.env.PORT || 3030

app.get('/', (req, res) => {
  res.end('Hello World')
})

app.listen(PORT, () => console.log(`App running on port: ${PORT}`))