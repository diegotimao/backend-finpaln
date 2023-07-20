import UserModel from "../../model/user/user.model";
import bcrypt from 'bcrypt';
import {generateToken} from '../../utils/jwt.util';
import { User } from "@prisma/client";
import { findByUsers } from "../../interfaces/user.findBay.interrface";

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

  public async login(email: string, password: string): Promise<string | null> {
    try {
      const result = await this.model.login(email, password)
      
      if (result === null) {
        throw new Error("Usuário não existe.")
      }
      const checkPassword = await bcrypt.compare(password, result.hashedPassword);
      
      if (!checkPassword) {
        return null
      }

      const token = generateToken({id: result.id, name: result.name, email: result.email});
      return token;
    } catch (error: unknown) {
      throw error;
    }
  }

  public async findBy(): Promise<findByUsers[]> {
    try {
      const users = await this.model.getUsers();
      return users
    } catch (error) {
      throw error;
    }
  }
}