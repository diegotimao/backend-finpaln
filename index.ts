import express, { Request, Response, NextFunction } from "express";
import routerUser from './src/routes/user.routes';
import 'express-async-errors';

const app: express.Application = express();
const PORT = 8080;

app.use(express.json());
app.use(routerUser)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(400).json({message: details[0].message});
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.log(err);
      res.sendStatus(500);
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server is runing at http://localhost:${PORT}`)
})