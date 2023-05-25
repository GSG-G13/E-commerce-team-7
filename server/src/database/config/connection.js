const pg = require('pg');
// import {} from 'dotenv/config';
require('dotenv').config()
// const connectionString = process.env.DB_URL;
const {
  DB_URL,
  TEST_DB_URL,
  NODE_ENV,
} = process.env;

let DB = '';

if (NODE_ENV === 'test') {
  DB = TEST_DB_URL;
} else if (NODE_ENV === 'development') {
  DB = DEV_DB_URL;
} else {
  DB = DB_URL;
}

const options = {
  connectionString: DB,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
};
console.log(DB);

export const connection = new pg.Pool(options);

// module.exports = connection;
