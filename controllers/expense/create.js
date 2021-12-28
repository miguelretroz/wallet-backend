const rescue = require('express-rescue');
const statusCodes = require('http-status-codes').StatusCodes;

const { ExpenseServices } = require('../../services');

module.exports = rescue(
  async (req, res) => {
    const { userId } = req;
    const { description, value, currency, convertedValue, convertedValueCurrency, exchangeRate,
      paymentMethod, tag } = req.body;

    const expense = await ExpenseServices.create(
      userId,
      {
        description,
        value,
        currency,
        convertedValue,
        convertedValueCurrency,
        exchangeRate,
        paymentMethod,
        tag,
      },
    );

    res.status(statusCodes.NOT_IMPLEMENTED).end();
  },
);
