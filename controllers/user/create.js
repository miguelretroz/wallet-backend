const rescue = require('express-rescue');
const statusCodes = require('http-status-codes').StatusCodes;

const { UserServices } = require('../../services');

module.exports = rescue(
  async (req, res) => {
    const userData = req.body;

    const newUser = await UserServices.create(userData);

    res.status(statusCodes.CREATED).json(newUser);
  },
);
