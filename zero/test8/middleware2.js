import express from 'express'
const app = express()

app.use((req, res, next) => {
  req.numb = 2
  res.numb = 3
  console.log('첫번째 미들웨어 입니다')
  next()
})

app.use((req, res, next) => {
  console.log('두번째 미들웨어 입니다')
  console.log(req.numb + '+' + res.numb + '=' + (req.numb + res.numb))
  next()
})

app.use((req, res) => {
  console.log('세번째 미들웨어 입니다')
  res.sendStatus(200)
  res.end('<h1>HEllo</h1>')
})

app.listen(3000, () => {
  console.log('server running...')
})
