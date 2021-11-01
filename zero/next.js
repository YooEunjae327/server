import express from 'express'
const app = express()

app.use((req, res, next) => {
  console.log('첫번째 미들웨어 입니다')
})

app.use((req, res, next) => {
  console.log('두번째 미들웨어 입니다')
})

app.use((req, res, next) => {
  console.log('세번째 미들웨어 입니다')
  res.end('<h1>Heeello</h1>')
})

app.listen(3000, () => {
  console.log('123')
})
