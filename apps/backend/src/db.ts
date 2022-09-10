import { MongoClient } from 'mongodb';

// const { MONGO_HOST, MONGO_USERNAME, MONGO_PASSWORD, MONGO_PORT, MONGO_DBNAME } =
//   process.env;

// const MONGO_USERNAME = 'crud-api';
// const MONGO_PASSWORD = 'supersecret';
const MONGO_HOST = 'localhost';
const MONGO_PORT = '27017';
const MONGO_DBNAME = 'crud-api';

const MONGO_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}?authSource=admin`;
export const client = new MongoClient(MONGO_URI);

export const db = client.db();
