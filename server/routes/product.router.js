const { Router } = require('express')
const { addProducts, getProduct } = require('../controllers/products.controller')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/uploads"));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

const router = Router()

router.post('/add-products', upload.single('productImage'), addProducts)
router.get('/get-products', getProduct)

module.exports = router