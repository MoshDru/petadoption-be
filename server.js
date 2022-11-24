import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import petRouter from './routes/petRoutes.js';
import userRouter from './routes/userRoutes.js';
import cors from "cors";
import uploadRouter from './routes/uploadRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors({
  origin: '*'
}));

app.use('/api/upload', uploadRouter);
app.use('/api/seed', seedRouter);
app.use('/api/pets', petRouter);
app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({message: err.message});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
