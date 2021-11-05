import express from 'express'

const router = express.Router()

router.get('/index', (req, res) => {
  res.send('<h1>index Page</h1>')
})

exports.router = router
