import express from 'express'

const app = express()

app
  .use((req, res) => {
    res.send('123121323121313212331223121')
  })
  .listen(3000, () => {
    console.log('Server running..')
  })
