import express from 'express';
import {userRouter} from './routes/userRouter.js';
import {postRouter} from './routes/postRouter.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/users', userRouter);
app.use('/posts', postRouter);

app.get('*', (req, res) => {
    res.status(404);
});

export default app;
