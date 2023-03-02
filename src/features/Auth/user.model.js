const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        name: String,
        level: String,
        Score: { type: Number, default: 0 },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
module.exports = User = mongoose.model("user", userSchema)