const bcrypt = require('bcrypt');
const { UserModels } = require('../../models');
const { UserSchemas } = require('../../schemas');

const { SALT_ROUNDS } = process.env;

module.exports = async (userData) => {
  UserSchemas.registerInput(userData);

  const { repeatPassword, password, ...userDataWithoutPassword } = userData;

  const encryptedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const newUser = UserModels.create({ ...userDataWithoutPassword, password: encryptedPassword });

  return newUser;
};
