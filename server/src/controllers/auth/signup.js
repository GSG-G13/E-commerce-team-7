import bcrypt from "bcrypt";
import { getUserByEmailQuery, signupQuery } from "../../database";
import { signupSchema } from "../../validation";
import ms from "ms";

const signupController = (req, res, next) => {
  const { username, email, password } = req.body;

  signupSchema.validateAsync(req.body, { abortEarly: false })
    .then(userData => getUserByEmailQuery(userData.email))
    .then(userData => {
      if (userData.rowCount > 0) {
        throw new Error(401, 'this email already exist');
      }
    })
    .then(() => {
      return bcrypt.hash(password, 12)
    })
    .then(hash => ({ username, email, password: hash }))
    .then(data => signupQuery(data))
    .then(data => data.rows[0])
}

export { signupController }