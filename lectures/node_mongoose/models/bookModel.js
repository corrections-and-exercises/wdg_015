import {Schema, model} from 'mongoose';

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    description: {
        type: String,
        required: true,
        minLength: [10, 'You need more characters'],
    },
    isbn: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        required: true,
        default: 'available',
        enum: {
            values: ['loaned', 'available', 'maintenance', 'reserved'],
            message: '{Value} is not supported',
        },
    },
});

export const Book = model('Book', bookSchema);
