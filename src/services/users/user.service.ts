import UserModel from "../../model/user/user.model";
import bcrypt from 'bcrypt';
import {generateToken} from '../../utils/jwt.util';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async createUser(name: string, email: string, password: string): Promise<string> {
    try {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const result = await this.model.createUser(name, email, hashedPassword);

      if (result) {
        const token = generateToken({id: result.id, email: result.email, name: result.name});
        return token;
      }
      
      throw new Error('Erro ao criar usuário');
    } catch (error: unknown) {
      throw new Error('Erro ao criar usuário: ' + (error as Error).message);
    }
  }
}