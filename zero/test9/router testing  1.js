import express from 'express'
const app = express()

const routerA = express.Router()
const routerB = express.Router()

routerA.get('/index', (req, res) => {
  res.send('<h1>router a: index</h1>')
})

routerB.get('/index', (req, res) => {
  res.send('<h1>router b: index2</h1')
})

app.use('/a', routerA)
app.use('/b', routerB)

app.listen(3000, () => {
  console.log('server running..s')
})
