const mongoose = require('mongoose');

const user = new mongoose.Schema(
    {
        userId: String,
        password: String
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('user', user);