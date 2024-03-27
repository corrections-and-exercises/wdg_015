import {pool} from '../db.js';

export async function createOrder(req, res) {
    const {price, date, user_id} = req.body;
    try {
        const {rows: order} = await pool.query(
            `INSERT INTO orders (price, date, user_id) VALUES ($1, $2, $3) RETURNING *;`,
            [price, date, user_id]
        );
        res.json(order);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

export async function getOrders(req, res) {
    try {
        const {rows: orders} = await pool.query(`SELECT * from orders`);
        res.json(orders);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

export async function getOneOrder(req, res) {
    const {id} = req.params;
    try {
        const {rows: order} = await pool.query(
            `SELECT * from orders WHERE id = $1`,
            [id]
        );
        res.json(order);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

export async function updateOrderPrice(req, res) {
    const {id} = req.params;
    const {price} = req.body;
    try {
        const {rows: order} = await pool.query(
            `UPDATE orders SET price = $1 WHERE id = $2 RETURNING *`,
            [price, id]
        );
        res.json(order);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

export async function deleteOrder(req, res) {
    const {id} = req.params;
    try {
        const {rows: order} = await pool.query(
            `SELECT * from orders WHERE id = $1`,
            [id]
        );
        if (!order.length > 0) {
            return res.send('Not found');
        }

        const {rows} = await pool.query(
            `DELETE FROM orders WHERE id = $1 RETURNING *`,
            [id]
        );
        res.json({message: 'order deleted', rows});
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}
