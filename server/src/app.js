import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import router from './routes/index.js';
import serverError from './middleware/serverError.js';
import clientError from './middleware/client.js';
import cors from "cors";
dotenv.config();

const app = express();

app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    credentials: true, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.use(clientError);
app.use(serverError);

export default app;
