const {
  isString,
  isNumber,
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

const numericFieldValidator = (field, fieldName) => {
  if (!field) return customError(errors.isRequired(fieldName));
  if (!isNumber(field)) return customError(errors.incorrectType(fieldName, 'number'));
  if (field < 0) return customError(errors.minValue(fieldName, 0));
};

module.exports = ({
  description,
  value,
  currency,
  convertedValue,
  convertedValueCurrency,
  exchangeRate,
  paymentMethod,
  tag,
}) => {
  stringFieldsValidator(description, 'description', 3);

  numericFieldValidator(value, 'value');

  stringFieldsValidator(currency, 'currency', 2);

  numericFieldValidator(convertedValue, 'convertedValue');

  stringFieldsValidator(convertedValueCurrency, 'convertedValueCurrency', 3);

  numericFieldValidator(exchangeRate, 'exchangeRate');

  stringFieldsValidator(paymentMethod, 'paymentMethod', 3);

  stringFieldsValidator(tag, 'tag', 3);
};
