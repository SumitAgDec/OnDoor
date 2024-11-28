const razorpayInstance = require("../config/paymentProduct")
const crypto = require('crypto')
const Payment = require("../models/payment.model")

const makePayment = async (req, res) => {
    const options = {
        amount: Number(req.body.price * 100),
        currency: 'INR'
    }

    const order = await razorpayInstance.orders.create(options)

    return res.status(201).json({
        success: true,
        order
    })
}

const paymentKey = (req, res) => {
    return res.status(200).json({ key: process.env.RAZORPAY_KEY_ID })
}

const paymentVerification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body

    const body = razorpay_order_id + "|" + razorpay_payment_id

    const generatedPassword = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(body.toString())
        .digest('hex')

    const isAuthentic = generatedPassword === razorpay_signature

    if (isAuthentic) {
        await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        })
        return res.redirect(`http://localhost:5173/orders?reference=${razorpay_payment_id}`)
    }
    else {
        return res.status(400).json({
            success: false,
            message: "Payment Failed"
        })
    }


}

module.exports = {
    makePayment,
    paymentKey,
    paymentVerification
}