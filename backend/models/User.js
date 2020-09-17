const mongoose = require('mongoose');

const user = new mongoose.Schema(
    {
        userId: String,
        password: String,
        role: {
            type: String,
            default: 'user',
            enum: ['user', 'admin']
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('user', user);