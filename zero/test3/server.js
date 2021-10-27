import http, { createServer } from 'http'
import fs, { readFile } from 'fs'
import url from 'url'

createServer((req, res) => {
  let path = url.parse(req.url).pathname
  let query = url.parse(req.url, true).query
  console.log(path)
  console.log(query)

  if (path == '/') {
    readFile('zero/test3/index.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(data)
    })
  } else if (path == '/show') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>' + JSON.stringify(query) + '</h1>')
  }
}).listen(3000, () => {
  console.log('Server running..')
})
