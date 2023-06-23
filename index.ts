import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const app = express();

app.use(express.json());

const PORT = 8080;

app.post("/login", (req: Request, res: Response) => {
  const user = req.body;
  return res.status(StatusCodes.OK).json(user)
});

app.listen(PORT, () => {
  console.log(`Server is runing at http://localhost:${PORT}`)
})