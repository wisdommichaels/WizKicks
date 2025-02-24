const jwt = require("jsonwebtoken");

module.exports.generateToken = async (data) => {
    try {
        const token = await jwt.sign(data, process.env.JWT_SECRET, {
             expiresIn: '7d'
            });
        return token;
    } catch (error) {
        console.error("Error generating token:", error);
        return null;
    }
};