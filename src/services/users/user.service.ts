import connection from "../../model/connection";
import UserModel from "../../model/user/user.model";
import User from "../../interfaces/user.interface";
import { Login } from "../../types/Login";
import { Register } from "../../types/Register";

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async register(register: Register) {
    console.log(register)
  }

  public async login(data: Login): Promise<User> {
    const user = await this.model.login(data.email);

    if (!user || user.hash_password !== String(data.hash_password)) {
      throw Object({ code: 409, message: 'Usuário não existe.' })
    }
    return user as User
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();

    const userFilter = users.filter((item) => item.name === "Diego")

    return userFilter;
  }
}

export default UserService