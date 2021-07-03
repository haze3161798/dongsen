const express = require('express')
const form = require('./form.json')
const cors = require('cors')
const app = express()
const path = require('path')
const port = 3090
app.use(express.static(path.join(process.cwd(), 'dist')))
app.use(cors())
app.get('/api/form', (req, res) => {
  res.send(form)
})
app.listen(port)
console.log(`http://127.0.0.1:${port}/`)
