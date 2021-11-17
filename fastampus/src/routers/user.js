import express from 'express'
const router = express.Router()

const USERS = {
  15: {
    nickname: 'foo',
  },
  16: {
    nickname: 'bar',
  },
}

router.get('/', (req, res) => {
  res.send('User list')
})

router.param('id', async (req, res, next, value) => {
  try {
    const user = USERS[value]

    if (!user) {
      const err = new Error('User not found')
      err.statusCode = 404
      throw err
    }
    req.user = user
    next()
  } catch (err) {
    next(err)
  }
})

router.get('/:id', (req, res) => {
  const resMimeType = req.accepts(['json', 'html'])

  if (resMimeType === 'json') {
    res.send('req.user')
  } else if (resMimeType === 'html') {
    res.render('index', {
      nickname: req.user.nickname,
    })
  }
})

router.post('/', (req, res) => {
  res.send('User registered')
})

export default router
