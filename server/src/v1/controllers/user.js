const User = require('../models/user');
const CryptoJS = require('crypto-js');
const jsonwebtoken = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { password } = req.body;

    try {
        req.body.password = CryptoJS.AES.encrypt(
            password,
            process.env.PASSWORD_SECRET_KEY
        );

        const user = await User.create(req.body);
        const token = jsonwebtoken.sign(
            { id: user._id },
            { expiresIn: '24h' }
        );
    } catch (err) {
        res.status(500).json(err);
    }
};