const { Router } = require('express')
const { createUser, verifyUser } = require('../controllers/user.controller')

const router = Router()

router.post('/signup', createUser)
router.post('/login', verifyUser)

module.exports = router