import { Router } from 'express';
import UserController from '../controllers/user/user.controller';
import { ValidationRegister, RegisterSchema } from '../schemaVallidation/RegisterSchema';
import { LoginSchema, ValidateLogin } from "../schemaVallidation/LoginSchema";

const router = Router();
const userController = new UserController();

router.post("/user/register", ValidationRegister(RegisterSchema), userController.createUser);
router.post("/user/login", ValidateLogin(LoginSchema), userController.login);
router.get("/user/list", userController.findBy);

export default router;