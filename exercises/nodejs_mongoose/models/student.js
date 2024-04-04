import {Schema, model} from 'mongoose';

const studentSchema = new Schema({
    name: String,
    first_name: String,
    email: String,
});

export const Student = model('Student', studentSchema);
