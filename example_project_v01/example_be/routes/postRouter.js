import {Router} from 'express';
import {
    createPost,
    getPostWithId,
    getPosts,
} from '../controllers/postController.js';

export const postRouter = Router();

postRouter.route('/').post(createPost).get(getPosts);

postRouter.route('/:id').get(getPostWithId);
