const { UserModels } = require('../../models');
const { UserSchemas } = require('../../schemas');

module.exports = async (userData) => {
  const { repeatPassword, ...userDataWithoutRepeat } = userData;

  UserSchemas.registerInput(userData);

  const newUser = UserModels.create(userDataWithoutRepeat);

  return newUser;
};
