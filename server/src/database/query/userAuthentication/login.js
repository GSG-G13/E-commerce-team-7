import connection from "../../config/connection.js";

const getUserByEmail = ({email}) => {
    const query = {
        text: 'SELECT * FROM users WHERE email = $1',
        values: [email]
    }
    return connection.query(query);
}
export default getUserByEmail;