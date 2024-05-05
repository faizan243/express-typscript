import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./src/configs/connectDB";

dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server Faizan Khan");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});