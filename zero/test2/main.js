import express from 'express'
import fs, { readFile } from 'fs'
const app = express()

app.use('/', (req, res) => {
  readFile('./zero/test2/index.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(data)
  })
})

app.get('/', (req, res) => {
  console.log('get')
})

app.post('/user', (req, res) => {
  readFile('./zero/test2/index.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(data)
  })
})

app.listen(3000, () => {
  console.log('server running..')
})
