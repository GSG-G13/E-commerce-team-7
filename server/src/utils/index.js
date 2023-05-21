import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});

export default loginSchema;
