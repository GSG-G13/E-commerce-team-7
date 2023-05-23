import express from 'express';
import { signupController } from '../controllers/index.js';
import { login } from '../controllers/auth/login.js';
import { isLogged } from '../middleware/isLogged.js';

const authRouter = express.Router();
authRouter.post('/signup', isLogged, signupController);
authRouter.post('/signin', isLogged, login);

export { authRouter };
