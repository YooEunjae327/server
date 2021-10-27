const http = require('http')
//import http from 'http';

const server = http.createServer()

server.on('request', (code) => {
    console.log('Request Evnet')
})

server.on('connection', (code) => {
    console.log('Connect Event')
})

server.listen(3000, () => {
    console.log('server running...')
})