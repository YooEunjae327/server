import express from 'express'
import fs, { readFile } from 'fs'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
const app = express()

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  if (req.cookies.auth) {
    res.send('<h1>Login successs</h1>')
  } else {
    res.redirect('/login')
  }
})

app.get('/login', (req, res) => {
  fs.readFile('./zero/test10/index.html', (err, data) => {
    res.send(data.toString())
  })
})

app.post('/login', (req, res) => {
  const id = req.body.id
  const pw = req.body.pw

  console.log(id, pw)
  console.log(req.body)

  if (id == 'admin' && pw == '1234') {
    res.cookie('auth', true)
    res.redirect('/')
  } else {
    res.redirect('login')
  }
})

app.listen(3000, () => {
  console.log('server running...')
})
