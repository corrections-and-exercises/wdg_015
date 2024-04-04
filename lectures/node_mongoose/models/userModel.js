import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: 'Email is required',
        trim: true,
        unique: true,
        lowercase: true,
    },
});

export const User = model('User', userSchema);
