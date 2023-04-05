import Joi from 'joi';

export default Joi.object({
  username: Joi.string().required()
    .label('username'),
  password: Joi.string().required()
    .label('password'),
});

export const postProductSchema = Joi.object({
  name: Joi.string().min(3).required()
    .label('name'),
  amount: Joi.string().min(3).required()
    .label('amount'),
});

export const postUserSchema = Joi.object({
  username: Joi.string().min(3).required()
    .label('username'),
  vocation: Joi.string().min(3).required()
    .label('vocation'),
  level: Joi.number().min(1).required()
    .label('level'),
  password: Joi.string().min(8).required()
    .label('password'),
});

export const postOrderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number()).min(1).required()
    .label('productsIds')
    .messages({
      'array.min': '"productsIds" must include only numbers',
    }),
});