import { Router } from 'express';
import UserController from '../controllers/user/user.controller';
import { ValidateLogin, LoginSchema } from '../schemaVallidation/LoginSchema';
import { ValidationRegister, RegisterSchema } from '../schemaVallidation/RegisterSchema';

const router = Router();
const userController = new UserController();

router.post("/user/register", ValidationRegister(RegisterSchema), userController.createUser);

export default router;