const User = require("../models/users.model")
const bcrypt = require('bcrypt')
const { createToken } = require("../services/auth.service")

const createUser = async (req, res) => {
    const { fullName, email, password, userProfile, userType } = req.body

    try {
        const saltRounds = 10
        const hashPassword = await bcrypt.hash(password, saltRounds)
        const user = await User.create({
            fullName,
            email,
            password: hashPassword,
            userProfile: `/userProfile/${req.file.filename}`,
            userType
        })

        if (user) {
            const token = createToken(user)
            res.cookie("token", token)
            return res.status(201).json({
                email: user.email,
                fullName: user.fullName,
                userProfile: user.userProfile,
                userType: user.userType
            });
        }
    } catch (error) {
        console.log("ERROR ", error)
        return res.status(500).json({
            success: false,
            message: "Error in signup"
        })
    }

}

const verifyUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) return null

        const verifyPassword = await bcrypt.compare(password, user.password)

        if (!verifyPassword) return null

        const token = createToken(user)

        res.cookie("token", token)

        return res.status(200).json({
            email: user.email,
            fullName: user.fullName,
            userProfile: user.userProfile,
            userType: user.userType
        });

    } catch (error) {
        console.log("ERROR ", error)
        return res.status(500).json({
            success: false,
            message: "Error in login"
        })
    }
}

module.exports = {
    createUser,
    verifyUser
}