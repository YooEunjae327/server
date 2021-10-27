const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer(function (req, res) {

  // URL을 받아올 변수를 선언합니다.
  let path = url.parse(req.url).pathname

  // 페이지를 구분합니다.
  if (path == '/') {

    // index.html로 응답합니다.
    fs.readFile('./test/index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(data)
    })

  } else if (path == '/otherPage') {

    // otherPage.html로 응답합니다.
    fs.readFile('./test/otherPage.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(data)
    })

  }

}).listen(3001, function () {
  console.log('Server is Running at http://127.0.0.1:3001')
})

// const http = require('http')
// const fs = require('fs')
// const url = require('url')

// http.createServer((req, res) => {
//     let path = url.parse(req.url).pathname
//     console.log(path)
//     if(path == '/')
//     {   
//         console.log('true')
//         fs.readFile('/test/index.html', (err, data) => {
//             res.writeHead(200, {'Content-Type': 'text/html'})
//             res.end(data)
//         })
//     }
//     else(path == '/otherPage')
//     {
//         fs.readFile('/test/otherPage.html', (err, data) => {
//             res.writeHead(200, {'Content-type': 'text/html'})
//             res.end(data)
//         })
//     }
// }).listen(3000, () => {
//     console.log('Server running...')
// })





// const url = require('url')

// const urlstr = 'http://www.sample.com:3000/main/post?category=nodejs&num=1'
// const urlobj = url.parse(urlstr, true)
// console.log(urlobj.pathname)


// const http = require('http')
// const cookie = require('cookie')

// http.createServer((req, res) => {
//     res.writeHead(200)
//     let cookies = {}
//     cookies = cookie.parse(req.headers.cookie)
//     console.log(req.headers.cookie)
//     console.log(cookie)

//     res.end('<h1' + cookie.myname + '</h1>')
// }).listen(3000, () => {
//     console.log('Server running..')
// })

// const http = require('http')

// http.createServer((req, res) => {
//     let date = new Date()
//     date .setDate(date.getDate() + 7)

//     res.writeHead(200, 
//         {'Content-Type' : 'text/html',
//         'Set-Cookie' : [
//             'myname = seongsoo; Expires = ' + date.toUTCString(),
//             'mygoal = good developer'
//         ]
//     })
//     res.end(`<h1> ${req.headers.cookie}</h1>`)
// }).listen(3000, () => {
//     console.log('Server running')
// })

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     fs.readFile('index.html', (err, data) => {
//         res.writeHead(200, { 'Content-Type': 'text/html'})
//         res.end(data)
//     })
// }).listen(3000, ()=> {
//     console.log('Server running...')
// })