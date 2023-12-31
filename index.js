const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
dotenv.config()
const authorization = require("./middleware/authorization");
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/job");


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
    .then(() =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    )
    .catch((error) => console.log(error));
})