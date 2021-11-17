import express from 'express'
import router from './routers/user.js'
const app = express()

app.use(express.json())
app.use(express.static('fastampus/src/public'))
app.set('views', './fastampus/src/views')
app.set('view engine', 'pug')

app.use('/users', router)
app.use((err, req, res, next) => {
  res.statusCode = err.statusCode || 500
  res.send(err.message)
})
app.listen(3000, () => {
  console.log('Server running...')
})
