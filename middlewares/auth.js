const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const { UNAUTHORIZED } = require('http-status-codes').StatusCodes;

const { JWT_SECRET_KEY } = process.env;

module.exports = rescue(
  (req, _res, next) => {
    try {
      const { authorization } = req.headers;

      const decode = jwt.verify(authorization, JWT_SECRET_KEY);

      req.userId = decode.sub;
      next();
    } catch (err) {
      err.statusCode = UNAUTHORIZED;
      next(err);
    }
  },
);
