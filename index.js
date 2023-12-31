const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const home = require("./routes/home")
const authorization = require("./middleware/authorization");
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/job");

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Routes
app.use("/home", home)
app.use("api/auth", authRoutes)
app.use("api/job", jobRoutes)




app.get('/health', (req, res) => {
    res.json({
        status:200,
        message: 'server is running',
    })
})
app.listen(process.env.port, () => {
    mongoose
    .connect(process.env.MONGODB_CONNECT_URI)
    .then(() =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    )
    .catch((error) => console.log(error));
})