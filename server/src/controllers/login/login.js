import { compare } from 'bcrypt';
import { loginSchema, signToken } from '../../utils/index.js';
import { getUserByEmail } from '../../database/query/index.js';
import { customError } from '../../middleware/index.js';

const login = (req, res, next) => {
  const { body: { password, email } } = req;
  loginSchema.validateAsync({ password, email })
    .then(getUserByEmail)
    .then(({ rows }) => {
      if (rows.length <= 0) throw customError(400, { message: 'Please enter correct password!' });
      req.user = rows[0];
      return compare(password, rows[0].password);
    })
    .then((isMatch) => {
      if (!isMatch) throw customError(401, { message: 'Please enter correct password!' });
      return signToken({ email, id: req.user.userId, username: req.user.username });
    })
    .then((token) => res.cookie('token', token).json({
      status: 200,
      msg: 'this user is logged',
    }))
    .catch((error) => {
      console.log(error);
      next(error);
    });
};

export default login;
