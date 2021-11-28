const connection = require('../connection');

module.exports = async (userData) => {
  const db = await connection();

  const { insertedId } = await db.collection('user').insertOne(userData);

  return { _id: insertedId, ...userData };
};
