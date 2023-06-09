import { verify } from '../utils/index.js';

export const isLogged = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next();
  }
  verify(token)
    .then(() => res.json({
      status: 401,
      msg: 'this user is logged',
    })).catch(() => {
      res.clearCookie('token');
      next();
    });
};
