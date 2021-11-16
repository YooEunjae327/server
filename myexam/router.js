import express from 'express'
import signup from './router/signup.js'
import login from './router/login.js'

const app = express()

app.use('/signup', signup)
app.use('/login', login)

export default app
