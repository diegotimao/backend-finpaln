import { Router,Response, Request } from 'express';
import UserController from '../controllers/user/user.controller';
import { StatusCodes } from 'http-status-codes';

const router = Router();
const userController = new UserController();

router.get('/users', userController.getAll);

router.post("/login", userController.login);

export default router;