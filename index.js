const express = require('express');
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const authorization = require("./middleware/authorization");
const authRoutes = require("./routes/auth")
const jobRoutes = require("./routes/job")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("api/auth", authRoutes);
app.use("api/job", jobRoutes);


app.get('/health', (req, res) => {
    res.json({
        status:200,
        message: 'server is running',
    })
})
app.listen(process.env.port, () => {
    console.log(`Server Running Succesfully on http://localhost:${process.env.port}`)
})