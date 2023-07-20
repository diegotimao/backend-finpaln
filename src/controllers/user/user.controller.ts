import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../../services/users/user.service";

class UserController {
  constructor(private userService = new UserService()) {}

  public createUser = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;  
    try {
      const result = await this.userService.createUser(name, email, password);
      return res.status(StatusCodes.CREATED).json({token: result})
    } catch (error) {
      if (error instanceof Error) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: error.message});
      }
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao processar a requisição.' });
    }
  }

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const result = await this.userService.login(email, password);
      
      if (result === null) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Credenciais inválidas.' });
      }
      return res.status(StatusCodes.OK).json({ token: result})
    } catch (error) {
      if (error instanceof Error) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: error.message});
      }
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao processar a requisição.' });
    }
  }
}

export default UserController;