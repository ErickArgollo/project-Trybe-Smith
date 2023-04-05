import jwt, { SignOptions } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || '123';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '50min',
};

export const createToken = <T>(data: T) => jwt.sign(
  { data },
  secret,
  JWT_CONFIG,
);

export const verifyToken = (token: string) => jwt.verify(token, secret);
