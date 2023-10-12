import Joi from "joi";

export const registerSchema = Joi.object({
    username: Joi.string()
      .trim()
      .pattern(/^[a-zA-Z0-9]{3,20}$/)
      .required(),
    password: Joi.string()
      .pattern(/^[a-zA-Z0-9*/]{3,20}$/)
      .trim()
      .required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).trim().strip(),
    email: Joi.string().email({ tlds: false }).required(),
  });