import express from 'express';
import {Student} from './models/student.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/', async (req, res) => {
    const {first_name, name, email} = req.body;
    try {
        const newStudent = await Student.create({
            first_name,
            name,
            email,
        });
        res.json({data: newStudent});
    } catch (error) {
        console.log(error);
    }
});

app.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json({data: students});
    } catch (error) {
        console.log(error);
    }
});

app.put('/', async (req, res) => {
    try {
        const changedStudents = Student.updateMany(
            {
                first_name: 'John',
            },
            {first_name: 'Bob'}
        );
        res.json({data: changedStudents});
    } catch (error) {
        console.log(error);
    }
});

export default app;
