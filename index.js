const express = require('express');
const home = require("./routes/home");
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')

app.get('/health', (req, res) => {
    res.json({
        status:200,
        message: 'server is running',
    })
})
app.listen(process.env.port, () => {
    console.log(`Server Running Succesfully on http://localhost:${process.env.port}`)
})