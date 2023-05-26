import pg from 'pg';
import {} from 'dotenv/config';

const {
  DEV_DB_URL,
  TEST_DB_URL,
  DB_URL,
  NODE_ENV,
} = process.env;

let DB = '';

if (NODE_ENV === 'test') {
  DB = TEST_DB_URL;
} else if (NODE_ENV === 'development') {
  DB = DB_URL;
} else {
  DB = DEV_DB_URL;
}

const options = {
  connectionString: DB,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
};

export const connection = new pg.Pool(options);

