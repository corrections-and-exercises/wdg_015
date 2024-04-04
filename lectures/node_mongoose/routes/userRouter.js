import {Router} from 'express';
import {createUser, getUsers} from '../controllers/userController.js';

export const userRouter = Router();

userRouter.route('/').get(getUsers).post(createUser);
