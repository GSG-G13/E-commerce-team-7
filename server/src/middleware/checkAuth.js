import { verify } from '../utils/index.js';

export const checkAuth = (req, res, next) => {
  const { token } = req.cookies
  if (!token) {
    res.json({
      status: 401,
      message: 'UnAuthenticate',
    });
  } else {
    verify(token)
      .then((decoded) => {
        req.userData = decoded;
        next();
      }).catch(() => {
        res.clearCookie('token').json({
          status: 401,
          message: 'UnAuthorized',
        });
      });
  }
};
