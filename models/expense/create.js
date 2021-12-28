const connection = require('../connection');

module.exports = async (expenseData) => {
  const db = await connection();

  const { insertedId } = await db.collection('user').insertOne(expenseData);

  return { _id: insertedId, ...expenseData };
};
