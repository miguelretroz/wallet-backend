// Referência - Caroline Benichio - https://github.com/tryber/sd-012-store-manager/pull/69/files#diff-a0e6476d049f6df5677274788d14d2af08966072ce7f4589c4edd0a9ca1c6061

class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static error({ status, message }) {
    throw new ApiError(status, message);
  }
}

module.exports = ApiError;
