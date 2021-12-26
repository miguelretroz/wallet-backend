const isString = require('./isString');
const {
  customError,
  errors,
} = require('../errors');

module.exports = (data, fieldName) => {
  if (!data) customError(errors.isRequired(fieldName));
  if (!isString(data)) customError(errors.incorrectType(fieldName, 'string'));
};
