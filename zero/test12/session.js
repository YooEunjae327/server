import express from 'express'
import session from 'express-session'
const app = express()

app.use(
  session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
  })
)

app.use((req, res) => {
  req.session.now = new Date().toUTCString()
  res.send(req.session)
})

app.listen(3000, () => {
  console.log('server running...')
})
