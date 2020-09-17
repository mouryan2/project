const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const signUp = async (req, res) => {

    try {
        let { password } = req.body;
        password = await bcrypt.hash(password, 15);
        let user = new User({ ...req.body, password });
        let response = await user.save();
        res.status(200).send({
            "message": response.userId + " " + 'registered successfully'
        });
    } catch (error) {
        res.status(400).send({ "error": error.message });
    }
}

const signIn = async (req, res) => {
    try {
        let { userId, password } = req.body;
        let user = await User.findOne({ userId });
        let valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new Error("password does not matched")
        }
        const jsonwebtoken = jwt.sign({ userId, role: user.role }, 'CISCO_MINDTREE', { expiresIn: '4000000' });
        res.status(200).send({ "token": jsonwebtoken, "userId": user.userId, "expiresIn": 4000000, "role": user.role });
    } catch (error) {
        console.log(error.message);
        res.status(400).send({ "error": error.message });
    }
}
module.exports = { signUp, signIn }