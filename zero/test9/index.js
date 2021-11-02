import express from 'express'
const app = express()

app.use('/a', require('./router').router)

app.listen(3000, () => {
  console.log('server running,...')
})
