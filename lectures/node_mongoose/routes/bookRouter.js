import {Router} from 'express';
import {
    createBook,
    deleteBook,
    getBook,
    getBookById,
    updateStatus,
} from '../controllers/bookController.js';

export const bookRouter = Router();

bookRouter.route('/').get(getBook).post(createBook);
bookRouter.route('/:id').get(getBookById).delete(deleteBook);
bookRouter.put('/:isbn', updateStatus);
