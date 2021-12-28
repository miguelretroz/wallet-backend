const rescue = require('express-rescue');
const { OK } = require('http-status-codes').StatusCodes;

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

    res.status(OK).json({ expense });
  },
);
