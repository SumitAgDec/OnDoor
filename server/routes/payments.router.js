const { Router } = require('express')
const { makePayment, paymentKey, paymentVerification } = require('../controllers/payment.controller')

const router = Router()

router.post('/api/payment', makePayment)
router.get('/api/key', paymentKey)
router.post('/api/paymentverification', paymentVerification)

module.exports = router