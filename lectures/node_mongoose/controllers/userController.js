import {User} from '../models/userModel.js';

export const createUser = async (req, res, next) => {
    const {first_name, last_name, email} = req.body;
    try {
        const newUser = await User.create({
            first_name,
            last_name,
            email,
        });
        res.json({data: newUser});
    } catch (error) {
        next(error);
    }
};

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json({data: users});
    } catch (error) {
        next(error);
    }
};
