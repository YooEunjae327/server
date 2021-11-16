import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'
import db from './config.js'
const signup = express.Router()

signup.use(express.static('myexam/view'))
signup.use(express.json())
signup.use(bodyParser.urlencoded({ extended: true }))

signup.get('/', (req, res) => {
  fs.readFile('myexam/view/signup.html', (err, data) => {
    if (err) console.log('err')
    else res.send(data.toString())
  })
})

signup.post('/', (req, res) => {
  const param = [req.body.id, req.body.pw, req.body.na]
  console.log(param)
  if (req.body.pw === req.body.pwwo) {
    db.query(
      'INSERT INTO information(id, pw, name) VALUES (?,?,?)',
      param,
      (err, row) => {
        if (err) console.log('err')
        else console.log('inset')
      }
    )
    res.end()
  } else {
    res.send(
      "<script>alert('비밀번호가 다릅니다.');location.href='/signup/';</script>"
    )
    console.log('비밀번호가 다릅니다.')
  }
})

export default signup
