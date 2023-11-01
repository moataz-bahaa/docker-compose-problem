import cors from 'cors';
import 'dotenv/config';
import express from 'express';

import prisma from './prisma/client.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json({
    users,
    message: 'hello world',
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port: ${port}`));
