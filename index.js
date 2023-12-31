const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()



app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.get('/health', (req, res) => {
    res.json({
        status:200,
        message: 'server is running',
    })
})
app.listen(process.env.port, () => {
    mongoose
    .connect(process.env.MONGODB_CONNECT_URI)
    .then(() => console.log("connection succesful"))
    .catch((error) => console.log(error))
    console.log(`Server Running Succesfully on http://localhost:${process.env.port}`)
})