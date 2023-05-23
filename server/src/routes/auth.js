import express from 'express';
import { signupController } from '../controllers/index.js';
import { login } from '../controllers/auth/login.js';

const authRouter = express.Router();
authRouter.post('/signup', signupController);
authRouter.post('/signin', login);

export { authRouter };
