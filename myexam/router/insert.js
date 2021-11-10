import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'
import db from './config.js'
const insert = express.Router()

insert.use(express.static('myexam/view'))
insert.use(express.json())
insert.use(bodyParser.urlencoded({ extended: true }))

insert.get('/login', (req, res) => {
  fs.readFile('myexam/view/index.html', (err, data) => {
    if (err) console.log('err')
    else res.send(data.toString())
  })
})

insert.post('/login', (req, res) => {
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
      `<script>
          alert('비밀번호가 다릅니다.');
        </script>`
    )
    res.redirect('/login')
    console.log('비밀번호가 다릅니다.')
  }
})

export default insert
