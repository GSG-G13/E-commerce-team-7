import { loginSchema, signToken } from "../../utils/index.js";
import { getUserByEmail } from "../../database/query/index.js";
import { compare } from 'bcrypt';
import { customError } from "../../middleware/index.js";


const login = (req, res, next) => {
  const { body: { password, email } } = req;
  loginSchema.validateAsync({ password, email })
    .then(getUserByEmail)
    .then(({ rows }) => {
      if (rows.length <= 0) throw customError(400, { message: "Please enter correct password!" })
      req.body.username = rows[0].username
      req.body.userId = rows[0].id
      return compare(password, rows[0].password)
    })
    .then((isMatch) => {
      if (!isMatch) throw customError(401, { message: "Please enter correct password!" })
      return signToken({ email, id: req.body.userId, username:req.body.username })
    })
    .then(token => {
      return res.cookie("token", token).json({
        error: false,
        msg: 'this user is logged'
      });
    })
    .catch((error) => {
      next(error)
    })
};

export default login;