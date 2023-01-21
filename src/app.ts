import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import express, { Express } from "express";
import { router } from "./infra/http/routes";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/api/v1", router);

export { app };
