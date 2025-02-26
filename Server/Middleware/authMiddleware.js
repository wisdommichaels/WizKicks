const jwt = require('jsonwebtoken');

// Middleware to verify JWT token

module.exports.verifyToken = async(req, res, next) => {
    const {admin_token} = req.cookies;
    if(!admin_token){
        return res.status(401).json({error: "Unauthorized"})
    } else {
       try {
           const decoded = await jwt.verify(admin_token, process.env.JWT_SECRET);
           req.role = decoded.role
           req.id = decoded.id;
           next();
       } catch (error) {
           return res.status(401).json({error: "Unauthorized"})
       }
    }
};