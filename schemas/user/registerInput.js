const {
  ApiError,
  errors,
} = require('../../error');

const { regex } = require('../../helpers');

const isString = (data) => typeof data === 'string';
const hasMinSize = (data, minSize) => data.length >= minSize;

const namesValidator = (field, fieldName, minLenght) => {
  switch (true) {
    case (!field):
      return ApiError.error(errors.isRequired(fieldName));
    case (!isString(field)):
      return ApiError.error(errors.incorrectType(fieldName));
    case (!hasMinSize(field, minLenght)):
      return ApiError.error(errors.shortLength(fieldName, minLenght));
    default:
      return {};
  }
};

const emailValidator = (email) => {
  const fieldName = 'email';
  const emailCorrectFormat = 'email@email.com';

  switch (true) {
    case (!email):
      return ApiError.error(errors.isRequired(fieldName));
    case (!isString(email)):
      return ApiError.error(errors.incorrectType(fieldName, 'string'));
    case (!regex.email.test(email)):
      return ApiError.error(errors.incorrectFormat(fieldName, emailCorrectFormat));
    default:
      return {};
  }
};

const birthDataValidator = (birthDate) => {
  const fieldName = 'birthDate';

  switch (true) {
    case (!birthDate):
      return ApiError.error(errors.isRequired(fieldName));
    case (!isString(birthDate)):
      return ApiError.error(errors.incorrectType(fieldName, 'string'));
    case (!regex.date.test(birthDate)):
      return ApiError.error(errors.incorrectFormat(fieldName, 'dd-mm-aaaa'));
    default:
      return {};
  }
};

/* eslint-disable*/
const passwordValidator = (password, repeatPassword) => {
  const fieldName = 'password and repeatName';

  switch (true) {
    case (!password || repeatPassword):
      return ApiError.error(errors.isREquired(fieldName));
    case (!isString(password) || !isString(repeatPassword)):
      return ApiError.error(errors.incorrectType(fieldName));
    case (!regex.password.test(password)):
      return ApiError.error(errors.incorrectPasswordFormat());
    case (password !== repeatPassword):
      return ApiError.error(errors.incorrectPasswordRepeat());
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
