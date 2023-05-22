import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import serverError from "./middleware/serverError.js";
import clientError from "./middleware/client.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.use(clientError);
app.use(serverError);

export default app;
