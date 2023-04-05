import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { IProduct } from '../interfaces';
import connection from './connection';

export const getAll = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute<IProduct[] & RowDataPacket[]>(`
    SELECT
      id, name, amount, order_id as orderId
    FROM Trybesmith.products;
  `);
  return rows;
};

export const newProduct = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const productInfo: IProduct = { id, name, amount };
  return productInfo;
};

export const updateProduct = async (productId:number, orderId: number) => {
  const query = `UPDATE Trybesmith.products
                 SET order_id = ?
                 WHERE id = ?`;
  const values = [orderId, productId];
  await connection.execute(query, values);
};
