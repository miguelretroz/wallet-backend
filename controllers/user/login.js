const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;

const { UserServices } = require('../../services');

module.exports = rescue(
  async (req, res) => {
    const { email, password } = req.body;

    const token = await UserServices.login({ email, password });

    res.status(OK).json({ token });
  },
);
