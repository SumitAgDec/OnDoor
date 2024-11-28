const { Schema, model } = require('mongoose')

const paymentSchema = new Schema({
    razorpay_order_id: {
        type: String,
        required: true
    },
    razorpay_payment_id: {
        type: String,
        required: true
    },
    razorpay_signature: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Payment = model("Payment", paymentSchema)

module.exports = Payment