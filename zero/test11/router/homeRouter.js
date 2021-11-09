import express from 'express'
const homeRouter = express.Router()

homeRouter.get('/', (req, res) => {
  res.send('Hello World')
})

export default homeRouter
