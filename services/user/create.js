const { UserModels } = require('../../models');

module.exports = async (userData) => {
  const { repeatPassword, ...userDataWithoutRepeat } = userData;

  const newUser = UserModels.create(userDataWithoutRepeat);

  return newUser;
};
