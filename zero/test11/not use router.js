//app.js
import express from 'express'
const app = express()
const PORT = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/user', function (req, res) {
  res.send('user page')
})

app.get('/content', function (req, res) {
  res.send('content page')
})

app.listen(PORT, function () {
  console.log('Server Good')
})
