const jwt = require('jsonwebtoken');

const verify_token = (req, role_user='admin') => {

    try {
        if (!req.headers.authorization) {
            throw new Error("auth token is missing")
        }
        const token = req.headers.authorization.split('Bearer')[1].trim();
        let { role } = jwt.verify(token, 'CISCO_MINDTREE');
        if (role_user !== role&&role_user!=='admin') {
            throw new Error("authentication denied")
        }
    } catch (error) {
        throw new Error(error);
    }
}
module.exports = { verify_token }