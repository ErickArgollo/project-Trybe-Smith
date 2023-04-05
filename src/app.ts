import express, { Request, Response, NextFunction } from 'express';
import { IResponse, ICustomError } from './interfaces';
import productRouter from './routes/products.route';
import userRouter from './routes/user.route';
import orderRouter from './routes/order.route';
import loginRouter from './routes/login.route';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

app.use((error: ICustomError, _req: Request, res: Response, _next: NextFunction) => {
  if (error.status) {
    const response: IResponse = {
      status: error.status,
      message: error.message,
    };
    return res.status(response.status).json(response);
  }
  res.status(500).json('internal Error');
});

export default app;
