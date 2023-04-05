import { Request, Response, NextFunction } from 'express';
import * as productService from '../services/productService';

export const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const { status, data } = await productService.getAll();
    res.status(status).json(data);
  } catch (error) {
    next(error);
  }
};

export const newProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await productService.newProduct(req.body);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};