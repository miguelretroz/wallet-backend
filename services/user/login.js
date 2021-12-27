const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { UserSchemas } = require('../../schemas');
const { UserModels } = require('../../models');

const {
  customError,
  errors,
} = require('../../errors');

const { JWT_SECRET_KEY } = process.env;

module.exports = async (userData) => {
  UserSchemas.emailValidator(userData.email);

  UserSchemas.passwordValidator(userData.password);

  const user = await UserModels.getByEmail(userData.email);

  if (!user) return customError(errors.userNotFound());

  if (!(await bcrypt.compare(userData.password, user.password))) {
    return customError(errors.incorrectPassword());
  }

  const { _id } = user;

  const data = {
    sub: _id,
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 48), // Transforma Date.now() que vem em milisegundos em segundos e adiciona a quantidade de dois dias em segundos ao total.
  };

  const token = jwt.sign(
    data,
    JWT_SECRET_KEY,
  );

  return token;
};
