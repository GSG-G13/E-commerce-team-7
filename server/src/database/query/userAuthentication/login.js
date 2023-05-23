import { connection } from '../../config/connection.js';

export const getUserByEmail = ({ email }) => {
  const query = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  };
  return connection.query(query);
};
