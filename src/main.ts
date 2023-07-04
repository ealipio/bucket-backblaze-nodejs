import express, { type Request, type Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { uploadMulter, uploadB2 } from './middleware';

dotenv.config();
const app = express();

app.use(cors());
// routes
app.post('/upload', uploadMulter, uploadB2, (req: Request, res: Response) => {
  res.json(res.locals.url);
});

app.listen(process.env.PORT, () => {
  console.log(`running at ${process.env.PORT}`);
});
