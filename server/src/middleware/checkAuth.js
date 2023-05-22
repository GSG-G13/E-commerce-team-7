import { verify } from '../utils/index.js';

export const checkAuth = (req, res, next) => {
  // const { token } = req.cookies;
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsInVzZXJuYW1lIjoibmFkYSIsImlhdCI6MTY4NDc2MTgzN30.x61609D6BiBGvCqctsdLHkChow_HO_llRpk4ZwhcSj0'
  if (!token) {
    return res.json({
      status: 401,
      message: 'UnAuthenticate',
    })
  }
  verify(token)
    .then((decoded) => {
      req.userData = decoded
      // console.log(decoded);
      next()
    }).catch(() => {
      res.clearCookie('token').json({
        status: 401,
        message: 'UnAuthorized',
      })
    })

}