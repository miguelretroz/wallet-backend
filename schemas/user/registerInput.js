const {
  customError,
  errors,
} = require('../../errors');

const { regex } = require('../../helpers');

const isString = (data) => typeof data === 'string';
const hasMinSize = (data, minSize) => data.length >= minSize;

const namesValidator = (field, fieldName, minLenght) => {
  switch (true) {
    case (!field):
      return customError(errors.isRequired(fieldName));
    case (!isString(field)):
      return customError(errors.incorrectType(fieldName, 'string'));
    case (!hasMinSize(field, minLenght)):
      return customError(errors.shortLength(fieldName, minLenght));
    default:
      return {};
  }
};

const emailValidator = (email) => {
  const fieldName = 'email';
  const emailCorrectFormat = 'email@email.com';

  switch (true) {
    case (!email):
      return customError(errors.isRequired(fieldName));
    case (!isString(email)):
      return customError(errors.incorrectType(fieldName, 'string'));
    case (!regex.email.test(email)):
      return customError(errors.incorrectFormat(fieldName, emailCorrectFormat));
    default:
      return {};
  }
};

const birthDataValidator = (birthDate) => {
  const fieldName = 'birthDate';

  switch (true) {
    case (!birthDate):
      return customError(errors.isRequired(fieldName));
    case (!isString(birthDate)):
      return customError(errors.incorrectType(fieldName, 'string'));
    case (!regex.date.test(birthDate)):
      return customError(errors.incorrectFormat(fieldName, 'dd-mm-aaaa'));
    default:
      return {};
  }
};

/* eslint-disable*/
const passwordValidator = (password, repeatPassword) => {
  const fieldName = 'password and repeatName';

  switch (true) {
    case (!password || !repeatPassword):
      return customError(errors.isRequired(fieldName));
    case (!isString(password) || !isString(repeatPassword)):
      return customError(errors.incorrectType(fieldName, 'string'));
    case (!regex.password.test(password)):
      return customError(errors.incorrectPasswordFormat());
    case (password !== repeatPassword):
      return customError(errors.incorrectPasswordRepeat());
    default:
      return {};
  }
};
/*  eslint-enable */

module.exports = (
  {
    firstName,
    lastName,
    email,
    password,
    repeatPassword,
    birthDate,
  },
) => {
  namesValidator(firstName, 'firstName', 4);
  namesValidator(lastName, 'lastName', 4);
  emailValidator(email);
  passwordValidator(password, repeatPassword);
  birthDataValidator(birthDate);
};
