import { MongoClient } from "mongodb";

let db = null;

export const ConnectDB = async (callback) => {
  let dbName = "Rhythm_Realm";
  try {
    let res = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });

    if (res) {
      db = res.db(dbName);
      callback(null, res);
    }
  } catch (err) {
    callback(err, null);
  }
};

export { db };
