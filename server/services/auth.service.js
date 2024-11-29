const JWT = require('jsonwebtoken')

const secret = process.env.JWT_SECRET

const createToken = (user) => {
    const token = JWT.sign({
        fullName: user.fullName,
        email: user.email
    }, secret)

    return token
}

module.exports = {
    createToken
}