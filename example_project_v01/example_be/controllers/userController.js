import { pool } from '../db.js';

export async function createUser(req, res) {
    const { firstname, lastname, email, password } = req.body;
    try {
        const { rows: user } = await pool.query(
            'INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
            [firstname, lastname, email, password]
        );
        res.json(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getUsers(req, res) {
    try {
        const { rows: users } = await pool.query('SELECT * FROM users');
        res.json(users);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getUserWithId(req, res) {
    const { id } = req.params;
    try {
        const { rows: user } = await pool.query(
            'SELECT * FROM users WHERE id = $1',
            [id]
        );
        res.json(user[0]);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
