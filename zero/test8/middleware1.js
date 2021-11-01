import express from 'express'
const app = express()

app.use((req, res, next) => {
  console.log('첫번쨰 미들웨어 입니다')
  next()
})

app.use((req, res, next) => {
  console.log('두번째 미들웨어 입니다')
  next()
})

app.use((req, res, next) => {
  console.log('세번째 미들웨어 입니다')
  res.send('<h1>HELLO</h1>')
})

app.listen(3000, () => {
  console.log('Server running..')
})
