import connection from "../../config/index.js";

const signupQuery = (userData) => {
  const { username, email, password } = userData;

  const sql = {
    text: 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *;',
    values: [username, email, password],
  }
  return connection.query(sql);
}

export default signupQuery;
