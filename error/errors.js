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

module.exports = {
  isRequired,
  incorrectType,
  shortLength,
  incorrectFormat,
  incorrectPasswordRepeat,
};
