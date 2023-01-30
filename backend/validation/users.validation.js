import Joi from 'joi';

const emailRole = {
  email: Joi.string().email().min(6).max(255).trim().required(),
};

const passwordRole = {
  password: Joi.string()
    .regex(
      new RegExp(
        '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*() ]).{6,12}$'
      )
    )
    .required(),
};

const nameRole = {
  name: Joi.string().min(2).max(255).alphanum().trim().required(),
};

const signupSchema = Joi.object({
  ...emailRole,
  ...passwordRole,
  ...nameRole,
});

const loginSchema = Joi.object({
  ...emailRole,
  ...passwordRole,
});

const forgetPasswordSchema = Joi.object({
  ...emailRole,
});

export const validateSignupSchema = (data) => {
  return signupSchema.validateAsync(data, { abortEarly: false });
};

export const validateLoginSchema = (data) => {
  return loginSchema.validateAsync(data, { abortEarly: false });
};

export const validateForgetPasswordSchema = (data) => {
  return forgetPasswordSchema.validateAsync(data, { abortEarly: false });
};
