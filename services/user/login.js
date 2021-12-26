const { UserSchemas } = require('../../schemas');

module.exports = async ({ email, password }) => {
  UserSchemas.emailValidator(email);

  UserSchemas.passwordValidator(password);
};
