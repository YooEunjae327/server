import express from 'express'
import fs from 'fs'
import path from 'path'

const router = express.Router()

// login router
router.get('/login', (req, res) => {
  fs.readFile('./public/login.html', (err, data) => {
    if (err) throw err
    else res.send(data.toString())
  })
})

// login cotroller
router.post('/login', async (req, res) => {
  const result = await controller_main.Signin(req.res)
  res.send(result)
})

// logout
router.get('/logout', (req, res) => {
  console.log('clear cookie')
  // res.clearCookie('userid')
  // res.clearCookie('username')
})
