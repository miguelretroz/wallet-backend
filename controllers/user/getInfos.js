const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;

const {
  UserServices,
} = require('../../services');

module.exports = rescue(
  async (req, res) => {
    const { userId } = req;

    const user = await UserServices.getInfos(userId);

    res.status(OK).json({ user });
  },
);
