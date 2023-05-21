import { verify } from '../utils/promisesSign.js';

export const checkAuth = (req, res, next) => {
  const { token } = req.cookies;
  
  if(!token) {
    return res.json({
      message: 'UnAuthorized',
    })
  }
  verify(token)
    .then((decoded) => {
      res.userData = decoded
      next()
    }).catch(() =>{
      res.clearCookie('token').json({
        message: 'UnAuthorized',
      })
    } )

}