const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (userId) => {
  if (!ObjectId.isValid(userId)) return null;

  const db = await connection();

  const user = await db.collection('user').findOne(new ObjectId(userId));

  return user;
};
