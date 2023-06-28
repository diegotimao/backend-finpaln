import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../../services/users/user.service";

class UserController {
  constructor(private userService = new UserService()) {}

  public login = async (req: Request, res: Response) => {
    const user = await this.userService.login(req.body);
    return res.status(StatusCodes.OK).json(user)
  }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    return res.status(StatusCodes.OK).json(users);
  }
}

export default UserController;