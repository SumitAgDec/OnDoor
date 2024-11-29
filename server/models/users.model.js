const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userProfile: {
        type: String,
        default: "/userProfile/60111.jpg",
    },
    userType: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }
}, { timestamps: true })

const User = model('User', userSchema)

module.exports = User