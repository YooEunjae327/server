import http, { createServer } from 'http'
import fs, { readFile } from 'fs'
import ejs from 'ejs'

createServer((req, res) => {
  readFile('./zero/test5/index.ejs', 'utf8', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(ejs.render(data))
  })
}).listen(3000, () => {
  console.log('Server running..')
})
