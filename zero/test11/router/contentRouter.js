import express from 'express'
const contentRouter = express.Router()

contentRouter.get('/content', (req, res) => {
  res.send('content page')
})

export default contentRouter
