const { Schema, model } = require('mongoose')

const querySchema = new Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: String,
        require: true,
    },
    OrderId: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
}, { timestamps: true })

querySchema.index({ email: 1, OrderId: 1 }, { unique: true });

const Query = model('Query', querySchema)

module.exports = Query