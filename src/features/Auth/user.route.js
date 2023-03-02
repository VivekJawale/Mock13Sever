const express = require('express');
const User = require("./user.model");
const app = express.Router();


app.post("", async (req, res) => {
    const { name, level, Score } = req.body;
    try {
        if (name) {
            let user = await User.findOne({ name: name })
            if (user) {
                return res.send({
                    status: 0,
                    massage: "user already exist",
                });
            } else {
                let newuser = await User.create({ ...req.body })
                return res.status(201).send({
                    newuser,
                    message: "User has been created",
                });
            }
        }
    } catch (error) {
        return res.status(404).send(error.message);
    }
})

app.get("", async (req, res) => {
    try {
        let user = await User.find().sort({ Score: -1 })
        return res.status(200).send(user)
    } catch (error) {
        return res.status(404).send(error.message);
    }
})
app.put("/:id", async (req, res) => {
    const { Score } = req.body;
    try {
        let user = await User.findByIdAndUpdate(
            { _id: req.params.id },
            { Score: Score }
        );
        if (user) {
            return res.status(200).send({ msg: "score updated" })
        } else {
            return res.status(404).send({ msg: "User does not exist" })
        }
    } catch (error) {
        return res.status(404).send(error.message);
    }
})


module.exports = app;