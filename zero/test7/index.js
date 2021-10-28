import express from 'express'
const app = express()

app
  .use((req, res) => {
    let value = []

    for (let i = 0; i < 5; i++) {
      value.push({
        num: i,
        desc: 'its :  ' + i,
      })
    }

    res.end(value)
  })
  .listen(3000, () => {
    console.log('Server running...')
  })
