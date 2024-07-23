import Joi from 'joi';

export const studentSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should be at least {#limit}',
    'string.max': 'Name should be at most {#limit}',
  }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'any.required': 'Gender is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email is not valid',
  }),
  year: Joi.number().min(1900).max(2015).required(),
  onDuty: Joi.boolean(),
});
