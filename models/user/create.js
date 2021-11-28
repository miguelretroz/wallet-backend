const connection = require('../connection');

module.exports = async (userData) => {
  const db = await connection();

  const newUser = await db.collection('user').insertOne(userData);

  return { _id: newUser.insertedId, ...userData };
};
