import express from 'express'
import multer from 'multer'
const router = express.Router()
const upload = multer({ dest: 'uploads/' })

const USERS = {
  15: {
    nickname: 'foo',
    profileImage: undefined,
  },
  16: {
    nickname: 'bar',
    profileImage: undefined,
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
      userId: req.params.id,
      profileimgurl: 'fastampus/src/uploads/e6e2cbb267303c82a5fd04e2c8136825',
    })
  }
})

router.post('/:id/profile', upload.single('profile'), (req, res, next) => {
  // const { user } = req
  // user.profileImage
  console.log(req.file)

  // const { user } = req
  // const { filename } = req.file
  // user.profileImage = filename

  res.send('User profile image uploaded')
})

export default router
