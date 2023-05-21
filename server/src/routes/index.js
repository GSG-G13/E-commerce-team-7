import express from 'express';

import { authRouter } from './auth.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'hello'
  })
});
router.use('/user',authRouter);

export default router;
