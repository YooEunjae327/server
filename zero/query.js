import express from 'express'

const app = express()

app
  .use((req, res) => {
    const name = req.query.name
    const age = req.query.age

    res.send('<h1>' + name + '-' + age + '</h1>')
  })
  .listen(3000, () => {
    console.log('server running..')
  })
