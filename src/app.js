import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.json({ result: 'Hello' });
});

export default app;
