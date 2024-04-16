import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const generateToken = (data, secret) => {
    return jwt.sign(data, secret, { expiresIn: '1800s' });
};

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 5);
};

export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};
