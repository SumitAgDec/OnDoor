const { Router } = require('express')
const { createUser, verifyUser } = require('../controllers/user.controller')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/userProfile"));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

const router = Router()

router.post('/signup', upload.single('userProfile'), createUser)
router.post('/login', verifyUser)

module.exports = router