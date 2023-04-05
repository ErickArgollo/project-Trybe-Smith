import loginFieldsValidator from './schemas';
import { getUser } from '../../models/user.model';
import { ILogin, IUser } from '../../interfaces';

export const isValidFields = async ({ username, password }:ILogin) => {
  const { error } = loginFieldsValidator.validate({ username, password });
  if (error) throw Object({ status: 400, message: error.message });
};

export const checkUserCredentials = async (info:ILogin) => {
  const credentials: IUser | null = await getUser(info);
  const checkPassword = credentials?.password === info.password; 
  if (!credentials || !checkPassword) {
    throw Object(
      { status: 401, message: 'Username or password invalid' },
    );
  }
};
