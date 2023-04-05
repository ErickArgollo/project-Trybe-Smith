import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { IOrder } from '../interfaces';
import connection from './connection';

export const getAllOrders = async (): Promise<IOrder[]> => {
  const [data] = await connection.execute<IOrder[] & RowDataPacket[]>(`
  SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds FROM Trybesmith.orders o
  INNER JOIN Trybesmith.products p ON o.id = p.order_id
  GROUP BY o.user_id, o.id;
  `);
  return data;
};

export const newOrder = async (userId:number): Promise<number> => {
  const [data] = await connection.execute<IOrder[] & ResultSetHeader>(`
    INSERT INTO Trybesmith.orders (user_id) VALUES (?)
  `, [userId]);
  const { insertId } = data; 
  return insertId;
};