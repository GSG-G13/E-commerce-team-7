import express from 'express';
import { signupController } from '../controllers/index.js';
import { login } from '../controllers/login/login.js';

const authRouter = express.Router();
authRouter.post('/signup', signupController);
authRouter.post('/login', login);

export { authRouter };
