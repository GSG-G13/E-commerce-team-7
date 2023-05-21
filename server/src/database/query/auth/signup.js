import connection from "../../config";

const signupQuery = (userData) => {
  const { username, email, password } = userData;
  const sql = {
    text: 'INSERT INTO USERS (username, email, password) VALUES $1, $2, $3 RETURNING id, username, email, password',
    values: [username, email, password],
  }
  return connection.query(sql);
}

export default signupQuery;
