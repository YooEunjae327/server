import express from 'express'

const app = express()

app
  .use((req, res) => {
    res.end('<h1>HI</h1>')
  })
  .listen(3000, () => {
    console.log('Server running..')
  })
