import { Router } from 'express';
import {
    createUser,
    getUserWithId,
    getUsers,
} from '../controllers/userController.js';

export const userRouter = Router();

userRouter.route('/').get(getUsers).post(createUser);

userRouter.route('/:id').get(getUserWithId);
