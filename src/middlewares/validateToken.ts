import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const payload = verifyToken(authorization);
    req.body.user = payload;
    next();
  } catch (error) {
    res.status(401).json({
      message: 'Invalid token',
    });
  }
};
