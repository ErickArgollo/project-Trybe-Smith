import { Request, Response, NextFunction } from 'express';
import login from '../services/loginService';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token:string = await login(req.body);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};