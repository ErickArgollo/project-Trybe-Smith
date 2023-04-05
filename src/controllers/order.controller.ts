import { Request, Response, NextFunction } from 'express';
import { ILogin, IOrder } from '../interfaces';
import { getAll, newOrderService } from '../services/orderService';

export const getAllOrders = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const data: IOrder[] = await getAll();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const newOrder = async (req: Request, res: Response, next: NextFunction) => {
  const username: ILogin = req.body.user.data;
  try {
    const data = await newOrderService(req.body, username);
    res.status(201).json({ userId: data?.userId, productsIds: req.body.productsIds });
  } catch (error) {
    next(error);
  }
};