import { getAllOrders, newOrder } from '../models/orders.model';
import { updateProduct } from '../models/products.model';
import { ILogin, IOrder, IUser } from '../interfaces';
import validateField from './validations/order';
import { getUser } from '../models/user.model';

export const getAll = async () => {
  const data: IOrder[] = await getAllOrders();
  return data;
};

export const newOrderService = async (order:IOrder, username:ILogin) => {
  await validateField(order);
  const userInfo: IUser | null = await getUser({
    username,
  });
  if (userInfo) {
    const orderId = await newOrder(userInfo.id as number);
    await Promise.all(order.productsIds.map((id:number) => updateProduct(id, orderId)));
    return { orderId, userId: userInfo.id };
  }
};