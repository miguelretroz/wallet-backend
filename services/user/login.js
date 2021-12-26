const bcrypt = require('bcrypt');

const { UserSchemas } = require('../../schemas');
const { UserModels } = require('../../models');

const {
  customError,
  errors,
} = require('../../errors');

module.exports = async ({ email, password }) => {
  UserSchemas.emailValidator(email);

  UserSchemas.passwordValidator(password);

  const user = await UserModels.getByEmail(email);

  if (!user) return customError(errors.userNotFound());

  if (!(await bcrypt.compare(password, user.password))) {
    return customError(errors.incorrectPassword());
  }
};
