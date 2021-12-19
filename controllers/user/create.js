const rescue = require('express-rescue');
const statusCodes = require('http-status-codes').StatusCodes;

const { UserServices } = require('../../services');

module.exports = rescue(
  async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
      repeatPassword,
      birthDate,
    } = req.body;

    const newUser = await UserServices.create({
      firstName,
      lastName,
      email,
      password,
      repeatPassword,
      birthDate,
    });

    res.status(statusCodes.CREATED).json(newUser);
  },
);
