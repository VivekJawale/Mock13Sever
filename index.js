require("dotenv").config();
const express = require('express');
const connect = require('./src/config/db');
const cors = require("cors");
const app = express();
const UserRouter = require("./src/features/Auth/user.route")
const WordRouter=require("./src/features/Word/word.route")
const port = process.env.PORT || 8080;


app.use(cors());
app.use(cors({
    origin: "*"
}))



app.get("", async (req, res) => {
    return res.send("Hello World")
})
app.use("/user", UserRouter)
app.use("/randomword",WordRouter)
app.listen(port, async (req, res) => {
    try {
        await connect()
        console.log("Connected  to db")
    } catch (error) {
        console.log(error)
    }
})

