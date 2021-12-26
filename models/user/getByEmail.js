const connection = require('../connection');

module.exports = async (email) => {
  const db = await connection();

  const user = await db.collection('user').findOne({ email });

  return user;
};
