import Joi from "joi";
import { CustomError } from "./helper/index.js";
import { signToken, verify } from './helper/index.js';


export const loginSchema = Joi.object({
  email: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});

export { CustomError, signToken, verify };

