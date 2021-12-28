const { UserModels } = require('../../models');

const {
  customError,
  errors,
} = require('../../errors');

module.exports = async (userId) => {
  const user = await UserModels.getById(userId);
  if (!user) return customError(errors.userNotFound());
};
