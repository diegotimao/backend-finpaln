import { Router,Response, Request } from 'express';
import UserController from '../controllers/user/user.controller';
import { StatusCodes } from 'http-status-codes';

const router = Router();
const userController = new UserController();

router.get('/users', userController.getAll);

router.post("/login", (req: Request, res: Response) => {
  const user = req.body;
  return res.status(StatusCodes.OK).json(user)
});

export default router;