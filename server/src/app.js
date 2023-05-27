import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import router from './routes/index.js';
import serverError from './middleware/serverError.js';
import clientError from './middleware/client.js';
import cors from "cors";
import { join } from 'path'
dotenv.config();

const app = express();
const __dirname = new URL('.', import.meta.url).pathname;
app.use(cookieParser());
app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', '..', 'client', 'dist' )))
app.get('/',  (req, res) => {

  res.sendFile(join(__dirname, '..', '..', 'client', 'dist', 'index.html' ));
})
app.use('/api', router);

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'client', 'dist', 'index.html' ))
})
app.use(clientError);
app.use(serverError);

export default app;
