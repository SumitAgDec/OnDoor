const mongoose = require('mongoose')

const connectToDB = async (url) => {
    await mongoose.connect(url)
        .then(() => console.log('DB Connected'))
        .catch((error) => console.log("Error ", error))
}

module.exports = {
    connectToDB
}