import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../../services/users/user.service";

class UserController {
  constructor(private userService = new UserService()) {}

  public login = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.login(req.body);
      return res.status(StatusCodes.OK).json(user)
    } catch (error) {
      if (error instanceof TypeError) {
        console.log(error.message)
        console.log(error.stack)
      }
    }
  }

  public register = async (req: Request, res: Response) => {
    try {
      const result = await this.userService.register(req.body);
      return res.status(StatusCodes.OK).json(result)
    } catch (error) {
      if (error instanceof TypeError) {
        console.log(error.message)
        console.log(error.stack)
      }
    }
  }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    return res.status(StatusCodes.OK).json(users);
  }
}

export default UserController;