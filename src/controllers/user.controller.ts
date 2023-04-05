import { Request, Response, NextFunction } from 'express';
import newUser from '../services/userService';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = await newUser(req.body);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};
