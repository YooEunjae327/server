// jset and supertest
// start : npm run test
// package.json :  "test": "jest",

// import supertest from 'supertest'
// import app from './app'

const supertest = require('supertest')
const app = require('./app')

const request = supertest(app)

test('our first test', async () => {
  const result = await request.get('/users/15').accept('application/json')
  console.log(result)
})
