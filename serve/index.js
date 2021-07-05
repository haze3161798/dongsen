const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const { v4: uuid } = require('uuid')
const port = 3090
const fs = require('fs').promises
app.use(express.static(path.join(process.cwd(), 'dist'))).use(bodyParser.json())
app.use(cors())
app.post('/api/form', async (req, res) => {
  const filePath = path.join(process.cwd(), 'serve', 'form.json')
  const formData = {}
  try {
    const oldData = await fs.readFile(filePath)
    formData.oldData = JSON.parse(oldData.toString())
  } catch (error) {
    formData.oldData = []
  }
  req.body.id = uuid()
  formData.oldData.push(req.body)
  await fs.writeFile(filePath, JSON.stringify(formData.oldData))
  res.send('sessus')
})
app.listen(port)
console.log(`http://127.0.0.1:${port}/`)
