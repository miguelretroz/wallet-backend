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

const passwordValidator = (password, repeatPassword) => {
  if (password !== repeatPassword) ApiError.error(errors.incorrectPasswordRepeat());

  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*()-+_={}[\]~^?]).{8,20}$/;

  if (!regexPassword.test(password)) ApiError.error(errors.incorrectPasswordFormat());
};

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
