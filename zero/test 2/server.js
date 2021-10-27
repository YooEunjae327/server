import { createServer } from 'http'
import { readFile } from 'fs'

createServer((req, res) => {
  if (req.method == 'GET') {
    console.log('this is get')
  } else if ((req.method = 'POST')) {
    console.log('this is post')
  }

  readFile('./zero/test2/index.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(data)
  })
}).listen(3000, () => {
  console.log('Server is running..')
})
