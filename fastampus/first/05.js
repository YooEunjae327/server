// Ch 09. Express로 웹사이트 만들기_05. 스태틱 파일 서빙

import express from 'express'
const app = express()

// css 불러오기
app.use(express.static('fastampus/src/public'))
app.set('views', './fastampus/src/views')
app.set('view engine', 'pug')
app.set(express.json())

const USERS = {
  15: {
    nickname: 'foo',
  },
  16: {
    nickname: 'var',
  },
}

app.param('id', (req, res, next, value) => {
  req.user = USERS[value]
  next()
})

app.get('/users/:id', (req, res) => {
  const resMimeType = req.accepts(['json', 'html'])

  if (resMimeType === 'json') {
    res.send(req.user)
  } else if (resMimeType === 'html') {
    res.render('index', {
      nickname: req.user.nickname,
    })
  }
})

app.get('/', (req, res) => {
  res.render('index', {
    message: 'Hello, pug!',
  })
})

app.listen(3000, () => {
  console.log('server running..')
})
