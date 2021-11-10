import express from 'express'
import insert from './router/insert.js'
const app = express()

app.use('/', insert)

export default app
