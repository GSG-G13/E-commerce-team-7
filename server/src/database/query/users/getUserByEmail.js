import connection from "../../config";

const getUserByEmailQuery = (email) => {
  const sql = {
    text: 'SELECT * FROM users WHERE email=$1',
    values: [email],
  };
  return connection.query(sql);
};

export { getUserByEmailQuery };