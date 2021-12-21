const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const isRequired = (fieldName) => ({
  status: BAD_REQUEST,
  message: `"${fieldName}" is required`,
});

const incorrectType = (fieldName, typeName) => ({
  status: BAD_REQUEST,
  message: `"${fieldName}" must be ${typeName}`,
});

const shortLength = (firstName, minLength) => ({
  status: BAD_REQUEST,
  message: `"${firstName}" must have a length greater than or equal to ${minLength}`,
});

const incorrectFormat = (fieldName, correctFormat) => ({
  status: BAD_REQUEST,
  message: `"${fieldName}" must have the format "${correctFormat}"`,
});

const incorrectPasswordRepeat = () => ({
  status: BAD_REQUEST,
  message: 'password repeat must be equal password',
});

/* eslint-disable*/
const incorrectPasswordFormat = () => ({
  status: BAD_REQUEST,
  message: '"password" must be have at least 8 characters long, 1 uppercase and 1 lowercase character, 1 number and 1 special character (!@#$%&*()-+_={}[]~^?)',
});
/* eslint-enable */

module.exports = {
  isRequired,
  incorrectType,
  shortLength,
  incorrectFormat,
  incorrectPasswordRepeat,
  incorrectPasswordFormat,
};
