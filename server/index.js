require('dotenv').config()
const express = require('express')
const productRoute = require('./routes/product.router')
const { connectToDB } = require('./db/connectDB')
const bodyParser = require("body-parser");
const path = require('path')

const app = express()

port = process.env.PORT

//connect to DB
connectToDB(process.env.MONGODB_URL)

//Middlewares
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));


app.use('/api', productRoute)

app.listen(port, () => console.log(`http://localhost:${port}`))