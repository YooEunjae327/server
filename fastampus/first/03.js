// Ch 09. Express로 웹 사이트 만들기_03. REST API 라우팅 하기

// 01 - get and post
// import express from 'express'
// const app = express()

// //http localhost:3000
// app.get('/', (req, res) => {
//   console.log('Root - GET')
// })

// //http POST localhost:3000
// app.post('/', (req, res) => {
//   console.log('Root - POST')
// })

// app.listen(3000, () => {
//   console.log('Server running...')
// })
// ――――――――――――――――――――――――――――――――――――――――――――――――――――――――

// 02 - path types

// link : https://expressjs.com/en/4x/api.html#path-examples

// import express from 'express'
// const app = express()

// // This will match paths starting with /abcd and /abd:
// app.get('/abc?d', (req, res) => {
//   res.send('true')
// })

// // This will match paths starting with /abcd, /abbcd, /abbbbbcd, and so on:
// app.get('/ab+cd', (req, res) => {
//   res.send('true')
// })

// // This will match paths starting with /abcd, /abxcd, /abFOOcd, /abbArcd, and so on:
// app.get('/ab*cd', (req, res) => {
//   res.send('true')
// })

// // This will match paths starting with /ad and /abcd:
// app.get('/a(bc)?d', (req, res) => {
//   res.send('true')
// })

// // This will match paths starting with /abc and /xyz:
// app.use(/\/abc|\/xyz/, (req, res) => {
//   res.send('true')
// })

// // This will match paths starting with /abcd, /xyza, /lmn, and /pqr:
// app.use(['/abcd', '/xyza', /\/lmn|\/pqr/], (req, res) => {
//   next()
// })

// app.listen(3000, () => {
//   console.log('servr running...')
// })

// ――――――――――――――――――――――――――――――――――――――――――――――――――――――――

// 03 - router

import express from 'express'
const app = express()
const userRouter = express.Router()

userRouter.get('/', (req, res) => {
  res.send('User list')
})

const USERS = {
  15: {
    nickname: 'foo',
  },
}
//핸들링
userRouter.param('id', (req, res, next, value) => {
  console.log(value)
  req.user = USERS[value]
  next()
})

userRouter.get('/:id', (req, res) => {
  res.send('User info with ID')
  res.send(req.user)
})

userRouter.post('/', (req, res) => {
  // Register user
  res.send('User post')
})

userRouter.post('/:id/nickname', (req, res) => {})

app.use('/users', userRouter)

app.listen(3000, () => {
  console.log('server running...')
})
