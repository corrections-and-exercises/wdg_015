import {body} from 'express-validator';

import {Router} from 'express';
import {
    createUser,
    deleteUser,
    getOneUser,
    getOrdersFromUser,
    getUsers,
    setUsersInactive,
    updateUserName,
} from '../controllers/userController.js';
import {nameValidator, validating} from '../inputValidator.js';

export const userRouter = Router();

userRouter
    .route('/')
    .get(getUsers)
    .post(nameValidator(), validating, createUser);
userRouter.route('/:id').get(getOneUser).put(updateUserName).delete(deleteUser);

userRouter.get('/:id/orders', getOrdersFromUser);
userRouter.put('/:id/check-inactive', setUsersInactive);
