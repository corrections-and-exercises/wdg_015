import {Book} from '../models/bookModel.js';

export const createBook = async (req, res, next) => {
    const {title, author, description, isbn, status} = req.body;
    try {
        const newBook = await Book.create({
            title,
            author,
            description,
            isbn,
            status,
        });
        res.json({data: newBook});
    } catch (error) {
        next(error);
    }
};

export const getBook = async (req, res, next) => {
    try {
        const books = await Book.find().populate({
            path: 'author',
        });
        res.json({data: books});
    } catch (error) {
        next(error);
    }
};

export const getBookById = async (req, res, next) => {
    const {id} = req.params;
    try {
        const book = await Book.find({
            _id: id,
        });
        res.json({data: book});
    } catch (error) {
        next(error);
    }
};

export const updateStatus = async (req, res, next) => {
    const {isbn} = req.params;
    const {status} = req.body;

    try {
        const updatedBook = await Book.findOneAndUpdate(
            {isbn},
            {status},
            {new: true, runValidators: true}
        );
        res.json({data: updatedBook});
    } catch (error) {
        next(error);
    }
};

export const deleteBook = async (req, res, next) => {
    try {
        const deletedBook = await Book.deleteOne({_id: req.params.id});
        res.json({data: deletedBook});
    } catch (error) {
        next(error);
    }
};
