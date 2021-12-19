const {
  ApiError,
  errors,
} = require('../../error');

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

const emailChecker = (email) => {
  /*
    Consultei estes dois links:
    -> RegExp utilizado -> https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    -> Quebra de um RegExp muito longo -> https://stackoverflow.com/questions/12317049/how-to-split-a-long-regular-expression-into-multiple-lines-in-javascript
   */
  const emailRegex = new RegExp([
    '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9]',
    '(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])',
    '?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'].join(''));
  return emailRegex.test(email);
};

const emailValidator = (email) => {
  const fieldName = 'email';
  const emailCorrectFormat = 'email@email.com';

  switch (true) {
    case (!email):
      return ApiError.error(errors.isRequired(fieldName));
    case (!isString(email)):
      return ApiError.error(errors.incorrectType(fieldName, 'string'));
    case (!emailChecker(email)):
      return ApiError.error(errors.incorrectFormat(fieldName, emailCorrectFormat));
    default:
      return {};
  }
};

const birthDataValidator = (birthDate) => {
  const fieldName = 'birthDate';
  const regexDate = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

  if (!regexDate.test(birthDate)) ApiError.error(errors.incorrectFormat(fieldName, 'dd-mm-aaaa'));
};

module.exports = (
  {
    firstName,
    lastName,
    email,
    // password,
    // repeatPassword,
    birthDate,
  },
) => {
  namesValidator(firstName, 'firstName', 4);
  namesValidator(lastName, 'lastName', 4);
  emailValidator(email);
  // passwordValidator(password, repeatPassword);
  birthDataValidator(birthDate);
};
