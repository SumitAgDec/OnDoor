const { Router } = require('express')
const { makePayment, paymentKey, paymentVerification, orders } = require('../controllers/payment.controller')

const router = Router()

router.post('/api/payment', makePayment)
router.get('/api/key', paymentKey)
router.post('/api/paymentverification', paymentVerification)
router.get('/api/Orders', orders)

module.exports = router