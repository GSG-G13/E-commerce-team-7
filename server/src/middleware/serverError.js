/* eslint-disable no-unused-vars */
import Joi from 'joi';
import Jwt from 'jsonwebtoken';
import { CustomError } from '../utils/index.js';

// eslint-disable-next-line consistent-return
const serverError = (err, req, res, next) => {
  if (err instanceof Joi.ValidationError) {
    return res.status(400).json({
      status: 401,
      data: {
        message: 'invalid inputs data!',
      },
    });
  }

  if (err instanceof Jwt.JsonWebTokenError) {
    return res.status(401).json({
      status: 401,
      data: {
        message: 'UnAuthorize',
      },
    });
  }
  if (err instanceof CustomError) {
    return res.status(400).json({
      status: 400,
      data: {
        message: err.message,
      },
    });
  }

  res.status(500).json({
    status: 500,
    message: 'err',
  });
};

export default serverError;
