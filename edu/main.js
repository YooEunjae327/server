import { createServer } from 'http'

createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<ul><li>tomato</li></ul> ')
}).listen(3000, function () {
  console.log('Server running..')
})
console.log('filename' + __filename)
console.log('dirname' + __dirname)

// import express from 'express'
// const app = express()
// const PORT = 3000

// app.set('title', 'GeeksforGeeks')

// app.get('/', (req, res) => {
//   res.send(app.get('title'))
// })

// app.listen(PORT, function (err) {
//   if (err) console.log(404)
//   console.log('Server listening on PORT', PORT)
// })

// import EventEmitter from 'events'

// const custom_event = new EventEmitter()

// custom_event.on('tomato', function()
// {
//     console.log('이벤트 콜')
// })

// custom_event.emit('tomato')]

// import { readFile } from 'fs';

// readFile('edu/text.txt', 'utf8', function(err, data){
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log(data);
//     }
// })
