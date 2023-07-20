import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../../services/users/user.service";

class UserController {
  constructor(private userService = new UserService()) {}

  public createUser = async (req: Request, res: Response) => {
    try {
      const {name, email, password} = req.body;
      const result = await this.userService.createUser(name, email, password);
      return res.status(StatusCodes.OK).json({token: result})
    } catch (error) {
      res.status(500).json({ error: "Usuário já existente." });
    }
  }
}

export default UserController;