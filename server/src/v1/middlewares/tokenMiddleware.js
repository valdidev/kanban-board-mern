const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/user');

const tokenDecode = (req) => {
    const bearerHeader = req.headers['authorization']
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ')[1]
        try {
            const tokenDecoded = jsonwebtoken.verify(
                bearer,
                process.env.TOKEN_SECRET_KEY
            );

            return tokenDecode;

        } catch {
            return false;
        }
    } else {
        return false;
    }
};