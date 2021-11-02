import express from 'express'

const app = express()

app.get('/one/:name', (req, res) => {
  res.send('<h1>' + req.params.name + ', Hello</h1')
})

app.listen(3000, () => {
  console.log('server running..')
})
