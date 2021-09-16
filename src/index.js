const express = require('express')
const router = require('../src/route/subjetc.route')

const app = express()
app.use(express.json())
app.use('/subject', router)

app.get('/', (req, res) => {
  res.send('Hello World !!!')
})

const port = 8087
app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
})