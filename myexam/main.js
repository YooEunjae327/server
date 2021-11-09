import express from 'express'
import fs, { readFile } from 'fs'
import path from 'path'
import mysql from 'mysql'
import bodyParser from 'body-parser'
import { resourceUsage } from 'process'

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  port: '3306',
  database: 'teambuilding',
})
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.set('views', './myexam/view')
// app.set('port', process.env.port || 3000)

// main loginvews
app.get('/loginviews', (req, res) => {
  readFile('./myexam/view/index.html', (err, data) => {
    res.send(data.toString())
  })
})

// DB SELECT
app.get('/readall', (req, res) => {
  const sql = 'SELECT * FROM student'
  conn.query(sql, (err, result) => {
    if (err) {
      console.log('err')
      res.status(500).send('Internal Server Error')
    }
    res.render('readall', { student: result })
  })
})

app.post('/')

app.listen(3000, () => {
  console.log('Server running...')
})
