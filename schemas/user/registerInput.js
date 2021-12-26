const {
  customError,
  errors,
} = require('../../errors');

const {
  date,
} = require('../../helpers');

const {
  hasMinSize,
  existsAndIsString,
} = require('../../helpers');

const emailValidator = require('./emailValidator');
const passwordValidator = require('./passwordValidator');

const namesValidator = (field, fieldName, minLenght) => {
  existsAndIsString(field, fieldName);

  switch (true) {
    case (!hasMinSize(field, minLenght)):
      return customError(errors.shortLength(fieldName, minLenght));
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

const passwordAndRepeatIsEqual = (password, repeatPassword) => {
  if (password !== repeatPassword) return customError(errors.incorrectPasswordRepeat());
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

  passwordValidator(password);
  passwordAndRepeatIsEqual(password, repeatPassword);

  birthDataValidator(birthDate);
};
