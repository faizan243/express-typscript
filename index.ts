import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./src/configs/connectDB";
import todoRoutes from './src/routes/todo/index.ts'


dotenv.config();
/* ====== Database ====== */
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);

/* ====== Express ====== */
const app: Express = express();
const port = process.env.PORT || 3000;


/* ====== Middlewares ====== */
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server Faizan Khan");
});

app.use('/api/todo', todoRoutes)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});