const express = require("express");

const app = express.Router();

app.get("", async (req, res) => {
    try {
        let word = "";
        let string = "abcdefghijklmnopqrstuvwxyz"
        for (let i = 0; i < Math.floor(Math.random() * 7) + 4; i++) {
            word += string.charAt(Math.floor(Math.random() * string.length))
        }
        return res.status(200).send({ word: word })
    } catch (error) {
        return res.status(404).send(error.message);
    }
})

module.exports = app;