import { postUserSchema } from './schemas';
import { IUser } from '../../interfaces';
import { errorStatus } from './products';

export default async ({ username, vocation, level, password }:IUser) => {
  const { error } = postUserSchema.validate({ username, vocation, level, password });
  
  if (error) {
    const status = errorStatus(error);
    throw Object({ status, message: error.message });
  }
};