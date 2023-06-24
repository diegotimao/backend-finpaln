import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../../interfaces/user.interface';
import { timeStamp } from 'console';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const result = await this.connection.execute('SELECT * FROM users');
    const [rows] = result;
    return rows as User[];
  }

  public async createUser(user: User): Promise<User> {
    const { name, hash_password } = user;

    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO users (name, hash_password, create_at) VALUES (?,?,?)', [name, hash_password, new Date()]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user};
  }
}
