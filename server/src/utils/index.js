import Joi from "joi";
import { signToken } from "./promisesSign.js";

export const loginSchema = Joi.object({
  email: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});

export { signToken };

