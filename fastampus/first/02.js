// Ch 09. Express로 웹 사이트 만들기_02. 미들웨어 개념 이해하고 만들어 보기


import express from 'express'
const app = express()


app.use('/', (req, res, next) => {
  console.log('Middleware 1')
  next()
})

app.use((req, res) => {
  console.log('Miideweare 2')
})

app.listen(3000, () => {
  console.log('server running...')
})
