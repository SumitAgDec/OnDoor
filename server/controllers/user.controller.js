const User = require("../models/users.model")
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
    const { fullName, email, password, userProfile, userType } = req.body

    try {
        const saltRounds = 10
        const hashPassword = await bcrypt.hash(password, saltRounds)
        const user = await User.create({
            fullName,
            email,
            password: hashPassword,
            userProfile,
            userType
        })

        if (user) {
            return res.status(201).json({
                success: true,
                message: "New user connected"
            })
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

        if (!user) return res.json({ message: "No user found" })

        const verifyPassword = await bcrypt.compare(password, user.password)

        if (!verifyPassword) return res.json({ message: "Incorrect password" })

        return res.status(200).send({
            success: true,
            message: "User loggedin"
        })

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