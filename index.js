const express = require('express');
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const authorization = require("./middleware/authorization");


app.get('/health', (req, res) => {
    res.json({
        status:200,
        message: 'server is running',
    })
})
app.get("/page", authorization, (req, res) => {
    res.json({
      status: "active",
      message: "running",
    });
  });
app.listen(process.env.port, () => {
    mongoose
    .connect(process.env.MONGODB_CONNECT_URI)
    .then(() => console.log("connection succesful"))
    .catch((error) => console.log(error))
    console.log(`Server Running Succesfully on http://localhost:${process.env.port}`)
})