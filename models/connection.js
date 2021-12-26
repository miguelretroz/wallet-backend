const { MongoClient } = require('mongodb');

const { MONGO_DB_URL, DB_NAME } = process.env;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = async () => {
  try {
    return db
    || MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db(DB_NAME);

      return db;
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connection;
