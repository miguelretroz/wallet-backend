const {
  isString,
} = require('../../helpers');

const {
  customError,
  errors,
} = require('../../errors');

const stringFieldsValidator = (field, fieldName, minLength) => {
  if (!field) return customError(errors.isRequired(fieldName));
  if (!isString(field)) return customError(errors.incorrectType(fieldName, 'string'));
  if (field.length < minLength) return customError(errors.shortLength(fieldName, minLength));
};

module.exports = ({
}) => {
};
