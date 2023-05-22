import express from 'express';
import { signupController } from '../controllers/index.js';

const authRouter = express.Router();
authRouter.post('/signup', signupController);

export { authRouter };
