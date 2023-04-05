import { ValidationError } from 'joi';
import { postProductSchema } from './schemas';
import { IProduct } from '../../interfaces';

export const errorStatus = (error: ValidationError) => {
  const { details } = error;
  const { message } = details[0]; 
  if (message.includes('is required')) return 400;
  return 422;
};

export default async ({ name, amount }:IProduct) => {
  const { error } = postProductSchema.validate({ name, amount });
  
  if (error) {
    const status = errorStatus(error);
    throw Object({ status, message: error.message });
  }
};