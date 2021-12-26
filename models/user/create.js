const connection = require('../connection');

module.exports = async ({
  firstName,
  lastName,
  email,
  password,
  birthDate,
}) => {
  const db = await connection();

  const { insertedId } = await db.collection('user').insertOne({
    firstName,
    lastName,
    email,
    password,
    birthDate: new Date(birthDate).toISOString(),
  });

  return { _id: insertedId, firstName, lastName, email, birthDate };
};
