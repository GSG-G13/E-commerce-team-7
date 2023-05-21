import pg from 'pg';
import {} from 'dotenv/config';

const connectionString = process.env.DB_URL

const connection = new pg.Pool({connectionString})

export default connection;

