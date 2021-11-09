import express from 'express'
import userRouter from './router/userRouter.js'
import homeRouter from './router/homeRouter.js'
import contentRouter from './router/contentRouter.js'
const app = express()

app.use('/user', userRouter)
app.use('/', homeRouter)
app.use('/content', contentRouter)

export default app
