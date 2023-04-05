import { postOrderSchema } from './schemas';
import { IOrder } from '../../interfaces';
import { errorStatus } from './products';

export default async ({ productsIds }:IOrder) => {
  const { error } = postOrderSchema.validate({ productsIds });
  if (error) {
    const status = errorStatus(error);
    throw Object({ status, message: error.message });
  }
};