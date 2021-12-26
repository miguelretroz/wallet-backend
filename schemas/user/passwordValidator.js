const {
  existsAndIsString,
  regex,
} = require('../../helpers');

const {
  customError,
  errors,
} = require('../../errors');

module.exports = (password) => {
  existsAndIsString(password, 'password');

  if (!regex.password.test(password)) return customError(errors.incorrectPasswordFormat());
};
