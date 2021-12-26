const {
  existsAndIsString,
  regex,
} = require('../../helpers');

const {
  customError,
  errors,
} = require('../../errors');

module.exports = (email) => {
  const fieldName = 'email';
  const correctFormat = 'email@email.com';

  existsAndIsString(email, fieldName);

  if (!regex.email.test(email)) {
    return customError(errors.incorrectFormat(fieldName, correctFormat));
  }
};
