import * as productModel from '../models/products.model';

import { IProduct } from '../interfaces';
import validateFields from './validations/products';

export const getAll = async () => {
  const data = await productModel.getAll();
  return { status: 200, data };
};

export const newProduct = async (product: IProduct) => {
  await validateFields(product);
  const data = await productModel.newProduct(product);
  return data;
};
