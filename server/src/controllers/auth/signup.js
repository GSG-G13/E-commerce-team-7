import bcrypt from "bcrypt";
import { getUserByEmailQuery, signupQuery } from "../../database/index.js";
import { signupSchema } from "../../validation/index.js";
import { CustomError, signToken } from "../../utils/index.js";

export const signupController = (req, res, next) => {
  const { body: {username, email, password  }} = req;
  signupSchema.validateAsync({username, email, password}, { abortEarly: false })
    .then(({email}) => getUserByEmailQuery(email))
    .then(({rows}) => {
      if (rows.length > 0) {
        throw new CustomError(401, 'this email already exist');
      }
    })
    .then(() => {
      return bcrypt.hash(password, 12)
    })
    .then(hash => (signupQuery({ username, email, password: hash })))
    .then(({rows}) => {
      return rows[0]
    })
    .then(({id, username}) => signToken({ id, username}))
    .then(token => {
      res.cookie("token", token)
        .json({
          data: { status: 201, 'msg': 'user signup successfully', rows:{username, email} }
        })
    })
    .catch(err => {
      next(err)
    })
}