import express from 'express';
import './db.js';
import {userRouter} from './routes/userRouter.js';
import {bookRouter} from './routes/bookRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/books', bookRouter);
app.use('/users', userRouter);

export default app;
