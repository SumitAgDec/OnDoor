require('dotenv').config()
const express = require('express')
const { connectToDB } = require('./db/connectDB')
const bodyParser = require("body-parser");
const path = require('path')

const productRoute = require('./routes/product.router')
const paymentRoute = require('./routes/payments.router')
const userRoute = require('./routes/user.router')

const app = express()

port = process.env.PORT

//connect to DB
connectToDB(process.env.MONGODB_URL)

//Middlewares
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
app.use("/userProfile", express.static(path.join(__dirname, "public/userProfile")));

// Routes
app.use('/api', productRoute)
app.use('/', paymentRoute)
app.use('/auth', userRoute)


app.listen(port, () => console.log(`http://localhost:${port}`))