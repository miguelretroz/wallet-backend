const statusCodes = require('http-status-codes').StatusCodes;

const isRequired = (fieldName) => ({
  status: statusCodes.BAD_REQUEST,
  message: `"${fieldName}" is required`,
});

const incorrectType = (fieldName, typeName) => ({
  status: statusCodes.BAD_REQUEST,
  message: `"${fieldName}" must be ${typeName}`,
});

const shortLength = (firstName, minLength) => ({
  status: statusCodes.BAD_REQUEST,
  message: `"${firstName}" must have a length greater than or equal to ${minLength}`,
});

const incorrectFormat = (fieldName, correctFormat) => ({
  status: statusCodes.BAD_REQUEST,
  message: `"${fieldName}" must have the format "${correctFormat}"`,
});

module.exports = {
  isRequired,
  incorrectType,
  shortLength,
  incorrectFormat,
};
