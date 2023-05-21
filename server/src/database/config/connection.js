import pg from 'pg';
import {} from 'dotenv/config';

const connectionString = process.env.DB_URL

const connection = new pg.Pool({ connectionString })


// connection.query('select * from users;')
// .then(console.log)

export default connection;