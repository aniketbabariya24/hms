const jwt = require('jsonwebtoken');
const db = require("../models/index");
const errorMiddleware = require('./error-middleware');
const User = db.User;

const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        // console.log("token", token);
        if (!token) {
            return res.json({ message: "Please Login to access this resource" })
        }
        const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.user = await User.findOne({ where: { email: decodedData.email } });

        if (!req.user) {
            return res.json({ message: "User not found" });
        }
        next();
    }
    catch (error) {
        errorMiddleware(error, req, res, next);
    }
}

const authorizeRole = (...roles) => async (req, res, next) => {
    try {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: `Role: ${req.user.role} is not allowed to access this resource.` })
        }
        next();
    }
    catch (error) {
        errorMiddleware(error);
    }
}

module.exports = {
    isAuthenticated,
    authorizeRole
};