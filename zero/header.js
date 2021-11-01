import express from 'express'
const app = express()

app
  .use((req, res) => {
    const agent = req.headers('User-Agent')
    console.log(req.headers)
    console.log(agent)
  })
  .listen(3000, () => {
    console.log('Server running')
  })
