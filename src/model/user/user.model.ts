import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  
}
