const rescue = require('express-rescue');
const { NOT_IMPLEMENTED } = require('http-status-codes').StatusCodes;

module.exports = rescue(
  async (req, res) => {
    res.status(NOT_IMPLEMENTED).end();
  },
);
