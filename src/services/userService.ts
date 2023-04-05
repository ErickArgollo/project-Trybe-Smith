import { newUser } from '../models/user.model';
import { createToken } from '../utils/jwt';
import validateFields from './validations/users';

import { IUser } from '../interfaces';

export default async (user: IUser) => {
  await validateFields(user);
  const { id } = await newUser(user);
  const token = createToken<number>(id as number);
  return token;
};
