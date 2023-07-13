import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  };

  public async login(email: string): Promise<User> {
    const result = await this.connection.execute('SELECT * FROM users WHERE email = (?)', [email]);
    const [rows] = result;
    const [user] = rows as User[];
    return user as User;
  };

  public async getAll(): Promise<User[]> {
    const result = await this.connection.execute('SELECT * FROM users');
    const [rows] = result;
    return rows as User[];
  };
};
