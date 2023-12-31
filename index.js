const express = require('express');
const app = express()
const dotenv = require('dotenv')
dotenv.config()


app.get('/health', (req, res) => {
    res.json({
        status:200,
        message: 'server is running',
    })
})
app.listen(process.env.port, () => {
    console.log(`Server Running Succesfully on http://localhost:${process.env.port}`)
})