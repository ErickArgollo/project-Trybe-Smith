import { createToken } from '../utils/jwt';
import { isValidFields, checkUserCredentials } from './validations/login';

import { ILogin } from '../interfaces';

export default async (loginInfo: ILogin): Promise<string> => {
  await isValidFields(loginInfo);
  await checkUserCredentials(loginInfo);
  
  const token: string = createToken<string>(loginInfo.username as string);
  return token;
};
