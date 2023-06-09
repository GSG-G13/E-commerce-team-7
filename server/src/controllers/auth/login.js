import { compare } from 'bcrypt';
import { signToken } from '../../utils/index.js';
import { getUserByEmail } from '../../database/query/index.js';
import { customError } from '../../middleware/index.js';
import { loginSchema } from '../../validation/index.js';

export const login = (req, res, next) => {
  const { body: { password, email } } = req;
  loginSchema.validateAsync({ password, email })
    .then(({email}) => {
      return getUserByEmail({email})
    })
    .then(({ rows }) => {
      if (rows.length <= 0) throw customError(400, { message: 'Please enter correct password!' });
      const [user] = rows;
      req.user = user;
      return compare(password, rows[0].password);
    })
    .then((isMatch) => {
      if (!isMatch) throw customError(401, { message: 'Please enter correct password!' });
      return signToken({ email, id: req.user.id, username: req.user.username });
    })
    .then((token) => res.cookie('token', token).json({
      status: 200,
      msg: 'the user has been signin successfully',
    }))
    .catch((error) => {
      next(error);
    });
};
