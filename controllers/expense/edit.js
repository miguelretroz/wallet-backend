const rescue = require('express-rescue');
const statusCodes = require('http-status-codes').StatusCodes;

module.exports = rescue(
  (req, res) => {
    res.status(statusCodes.NOT_IMPLEMENTED).end();
  },
);
