const {
  customError,
  errors,
} = require('../../errors');

const {
  regex,
  date,
} = require('../../helpers');

const {
  hasMinSize,
  existsAndIsString,
} = require('../../helpers');

const namesValidator = (field, fieldName, minLenght) => {
  existsAndIsString(field, fieldName);

  switch (true) {
    case (!hasMinSize(field, minLenght)):
      return customError(errors.shortLength(fieldName, minLenght));
    default:
      return {};
  }
};

const emailValidator = (email) => {
  const fieldName = 'email';
  const emailCorrectFormat = 'email@email.com';

  existsAndIsString(email, fieldName);

  switch (true) {
    case (!regex.email.test(email)):
      return customError(errors.incorrectFormat(fieldName, emailCorrectFormat));
    default:
      return {};
  }
};

const birthDataValidator = (birthDate) => {
  const fieldName = 'birthDate';

  const userMinAge = 10;

  existsAndIsString(birthDate, fieldName);

  switch (true) {
    case (!date.hasTheCorrectFormat(birthDate)):
      return customError(errors.incorrectFormat(fieldName, 'mm-dd-aaaa'));
    case (!date.thisDateExits(birthDate)):
      return customError(errors.invalidDate(fieldName));
    case (date.getYearsOld(birthDate) < userMinAge):
      return customError(errors.userMinAge(userMinAge));
    default:
      return {};
  }
};

const passwordValidator = (password, repeatPassword) => {
  const fieldNameOne = 'password';
  const fieldNameTwo = 'repeatName';

  existsAndIsString(password, fieldNameOne);
  existsAndIsString(repeatPassword, fieldNameTwo);

  switch (true) {
    case (!regex.password.test(password)):
      return customError(errors.incorrectPasswordFormat());
    case (password !== repeatPassword):
      return customError(errors.incorrectPasswordRepeat());
    default:
      return {};
  }
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
