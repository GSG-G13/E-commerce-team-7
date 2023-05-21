import bcrypt from "bcrypt";
import ms from "ms";
import { getUserByEmailQuery, signupQuery } from "../../database/index.js";
import { signupSchema } from "../../validation/index.js";
import { CustomError, signToken } from "../../utils/index.js";

export const signupController = (req, res, next) => {
  const { username, email, password } = req.body;

  signupSchema.validateAsync(req.body, { abortEarly: false })
    .then(userData => getUserByEmailQuery(userData.email))
    .then(userData => {
      if (userData.rowCount > 0) {
        throw new CustomError(401, 'this email already exist');
      }
    })
    .then(() => {
      return bcrypt.hash(password, 12)
    })
    .then(hash => ({ username, email, password: hash }))
    .then(data => signupQuery(data))
    .then(data => data.rows[0])
    .then(data => signToken({ id: data.id, username: data.username }))
    .then(token => {
      res.cookie("token", token)
        .json({
          data: { error: false,'msg': 'user signup successfully', rows: res.userData }
        })
    })
    .catch(err => next(err))
}