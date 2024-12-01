const Query = require("../models/query.model")

const submitQuery = async (req, res) => {
    const { fullName, email, phoneNumber, OrderId, description } = req.body
    const query = await Query.create({
        fullName,
        email,
        phoneNumber,
        OrderId,
        description
    })
    return res.status(201).json({
        query
    })
}

const getQuery = async (req, res) => {
    const querries = await Query.find({})
    return res.status(200).send(querries)
}

module.exports = {
    submitQuery,
    getQuery
}