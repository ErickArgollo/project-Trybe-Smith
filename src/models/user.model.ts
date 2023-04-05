import { ResultSetHeader } from 'mysql2';
import { IUser, ILogin } from '../interfaces';
import connection from './connection';

export const newUser = async (user: IUser): Promise<IUser> => {
  const { username, vocation, level, password } = user;

  const query = `INSERT INTO Trybesmith.users
   (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const userInfo: IUser = { id, username, vocation, level, password };
  return userInfo;
};

export const getUser = async (loginInfo: ILogin): Promise<IUser | null> => {
  const { username } = loginInfo;
  const query = `SELECT * FROM Trybesmith.users
  WHERE username = ?`;
  const value = [username];

  const [result] = await connection.execute(query, value);
  const [data] = result as IUser[];
  
  return data;
};
