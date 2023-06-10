const jwt = require('jsonwebtoken');

const generateSign = (id, user) => {
    return jwt.sign({id, user}, process.env.JWT_KEY, {expiresIn: '4h'})
}


const verifySign = (token) => {
    return jwt.verify(token, process.env.JWT_KEY)
}

module.exports = {generateSign,verifySign}

// utilidad para generar token y verificar la validez