import {Router} from 'express';
import {
    createOrder,
    deleteOrder,
    getOneOrder,
    getOrders,
    updateOrderPrice,
} from '../controllers/orderController.js';

export const orderRouter = Router();

orderRouter.route('/').get(getOrders).post(createOrder);
orderRouter
    .route('/:id')
    .get(getOneOrder)
    .put(updateOrderPrice)
    .delete(deleteOrder);
