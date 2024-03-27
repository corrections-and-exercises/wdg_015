import express from 'express';
import {userRouter} from './routes/userRouter.js';
import {orderRouter} from './routes/orderRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.get('/', (req, res) => {
//   res.send('Express Generator');
// });

app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
