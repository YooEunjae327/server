import http, { createServer } from 'http'
import fs, { readFile } from 'fs'
import url from 'url'

createServer((req, res) => {
  let path = url.parse(req.url).pathname

  if (path == '/') {
    readFile('./zero/test4/index.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(data)
    })
  } else if (path == '/show') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h2>' + data + '</h2>')
  }
}).listen(3000, () => {
  console.log('Server running..')
})
