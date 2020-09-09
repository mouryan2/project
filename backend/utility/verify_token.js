const jwt = require('jsonwebtoken');

const verify_token = (req, res, next) => {

    try {
        if (!req.headers.authorization) {
            throw new Error("auth token is missing")
        }
        const token = req.headers.authorization.split('Bearer')[1].trim();
        jwt.verify(token, 'CISCO_MINDTREE');
        return next();
    } catch (error) {
        res.status(400).send({ "error": error.message });
    }
}
module.exports = { verify_token }