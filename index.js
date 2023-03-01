require("dotenv").config();
const express = require('express');
const connect = require('./src/config/db');
const cors = require("cors");
const app = express();




app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8080;


app.get("", async (req, res) => {
    return res.send("Hello World")
})


app.listen(port, async (req, res) => {
    try {
        await connect()
        console.log("Connected  to db")
    } catch (error) {
        console.log(error)
    }
})

