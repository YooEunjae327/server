import express from 'express'
const userRouter = express.Router()

userRouter.get('/user', (req, res) => {
  res.send('user page')
})

export default userRouter
