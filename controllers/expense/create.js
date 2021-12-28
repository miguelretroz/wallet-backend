const rescue = require('express-rescue');
const statusCodes = require('http-status-codes').StatusCodes;

const { ExpenseServices } = require('../../services');

module.exports = rescue(
  async (req, res) => {
    const { userId } = req;

    const expense = await ExpenseServices.create(userId);

    res.status(statusCodes.NOT_IMPLEMENTED).end();
  },
);
