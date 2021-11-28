const ApiError = require('../error/ApiError');

module.exports = (err, _req, res, _next) => {
  const { status, message } = err;

  const errorFormat = { err: { message } };

  if (err instanceof ApiError) return res.status(status).json(errorFormat);

  res.status(500).json(errorFormat);
};
