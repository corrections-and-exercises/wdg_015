import {validationResult} from 'express-validator';
import {pool} from '../db.js';

export async function createUser(req, res) {
    const {first_name, last_name, age} = req.body;
    try {
        const {rows: user} = await pool.query(
            `INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3) RETURNING *;`,
            [first_name, last_name, age]
        );
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

export async function getUsers(req, res) {
    try {
        const {rows: users} = await pool.query(`SELECT * from users`);
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

export async function getOneUser(req, res) {
    const {id} = req.params;
    try {
        const {rows: user} = await pool.query(
            `SELECT * from users WHERE id = $1`,
            [id]
        );
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

export async function updateUserName(req, res) {
    const {id} = req.params;
    const {first_name, last_name} = req.body;
    try {
        const {rows: user} = await pool.query(
            `UPDATE users SET first_name = $1, last_name = $2 WHERE id = $3 RETURNING *`,
            [first_name, last_name, id]
        );
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

export async function deleteUser(req, res) {
    const {id} = req.params;
    try {
        const {rows: user} = await pool.query(
            `SELECT * from users WHERE id = $1`,
            [id]
        );
        if (!user.length > 0) {
            return res.send('Not found');
        }

        const {rows} = await pool.query(
            `DELETE FROM users WHERE id = $1 RETURNING *`,
            [id]
        );
        res.json({message: 'user deleted', rows});
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

export async function getOrdersFromUser(req, res) {
    const {id} = req.params;
    try {
        const {rows: orders} = await pool.query(
            `
        SELECT (price, date, first_name, last_name) FROM orders JOIN users ON orders.user_id = users.id WHERE users.id = $1;
        `,
            [id]
        );
        res.json(orders);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function setUsersInactive(req, res) {
    const {id} = req.params;
    try {
        const {rows} = await pool.query(
            `
        UPDATE users SET active = false 
        WHERE id = $1 AND NOT EXISTS (SELECT * FROM 
            orders WHERE user_id = $1) RETURNING *
        `,
            [id]
        );
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}
