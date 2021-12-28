const {
  BAD_REQUEST,
  NOT_FOUND,
} = require('http-status-codes').StatusCodes;

const isRequired = (fieldName) => ({
  statusCode: BAD_REQUEST,
  message: `"${fieldName}" is required`,
});

const incorrectType = (fieldName, typeName) => ({
  statusCode: BAD_REQUEST,
  message: `"${fieldName}" must be ${typeName}`,
});

const shortLength = (fieldName, minLength) => ({
  statusCode: BAD_REQUEST,
  message: `"${fieldName}" must have a length greater than or equal to ${minLength}`,
});

const incorrectFormat = (fieldName, correctFormat) => ({
  statusCode: BAD_REQUEST,
  message: `"${fieldName}" must have the format "${correctFormat}"`,
});

const incorrectPasswordRepeat = () => ({
  statusCode: BAD_REQUEST,
  message: 'password repeat must be equal password',
});

const incorrectPasswordFormat = () => ({
  statusCode: BAD_REQUEST,
  message: `"password" must be have at least 8 characters long,
  1 uppercase and 1 lowercase character,
  1 number and 1 special character (!@#$%&*()-+_={}[]~^?)`,
});

const invalidDate = (fieldName) => ({
  statusCode: BAD_REQUEST,
  message: `${fieldName} is an invalid date`,
});

const userMinAge = (minAge) => ({
  statusCode: BAD_REQUEST,
  message: `user to be older than ${minAge} years`,
});

const userNotFound = () => ({
  statusCode: NOT_FOUND,
  message: 'user not found',
});

const incorrectPassword = () => ({
  statusCode: BAD_REQUEST,
  message: 'incorrect password',
});

module.exports = {
  isRequired,
  incorrectType,
  shortLength,
  incorrectFormat,
  incorrectPasswordRepeat,
  incorrectPasswordFormat,
  invalidDate,
  userMinAge,
  userNotFound,
  incorrectPassword,
};
