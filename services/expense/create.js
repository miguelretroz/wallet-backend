const {
  UserModels,
  ExpenseModels,
} = require('../../models');

const {
  customError,
  errors,
} = require('../../errors');

const {
  ExpenseSchemas,
} = require('../../schemas');

module.exports = async (userId, expenseData) => {
  const user = await UserModels.getById(userId);
  if (!user) return customError(errors.userNotFound());

  ExpenseSchemas.registerInputs(expenseData);

  const newExpense = await ExpenseModels.create({ ...expenseData, userId });

  return newExpense;
};
