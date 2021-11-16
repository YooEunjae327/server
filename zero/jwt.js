import express from 'express'
import jwt from 'jsonwebtoken'
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world1')

    const token = jwt.sign({
        test : 'test'
    }),
    ''
})