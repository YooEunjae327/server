// Ch 09. Express로 웹 사이트 만들기_04. Pug로 템플릿 그려보기

// template engine
// npm install pug

import express from 'express'
const app = express()

// pug root esignation
app.set('views', './fastampus/src/views')
// engine setting
// use pug
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
  res.render('index04', {
    // 변수 선언 같은 것
    message: 'Hello, pug!',
  })
})

app.listen(3000, () => {
  console.log('server running..')
})
