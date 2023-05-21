import { verify } from '../utils/index.js';

export const checkAuth = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.json({
      error: true,
      message: 'UnAuthenticate',
    })
  }
  verify(token)
    .then((decoded) => {
      res.userData = decoded
      next()
    }).catch(() => {
      res.clearCookie('token').json({
        error: true,
        message: 'UnAuthorized',
      })
    })

}