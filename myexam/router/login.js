import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'
import db from './config.js'
const login = express.Router()

login.use(express.static('myexam/view'))
login.use(express.json())
login.use(bodyParser.urlencoded({ extended: true }))

login.get('/', (req, res) => {
  fs.readFile('myexam/view/login.html', (err, data) => {
    if (err) console.log(err)
    else res.send(data.toString())
  })
})

export default login
