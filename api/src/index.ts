import express from 'express';
import dotenv from 'dotenv';
import router from './router';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

app.use('/', router());
