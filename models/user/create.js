const connection = require('../connection');

module.exports = async (userData) => {
  const db = await connection();

  const { insertedId } = await db.collection('user').insertOne(userData);

  const { password, ...userDataWithoutPassword } = userData;

  return { _id: insertedId, ...userDataWithoutPassword };
};
