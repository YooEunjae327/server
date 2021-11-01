import express from 'express'

const app = express()

app
  .use((req, res) => {
    res.status(404).send('<h1>404: Page not found</h1>')
  })
  .listen(3000, () => {
    console.log('server running. ')
  })
