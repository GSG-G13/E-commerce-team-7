import pg from 'pg';
import {} from 'dotenv/config';

const connectionString = process.env.DB_URL;

export const connection = new pg.Pool({ connectionString });
