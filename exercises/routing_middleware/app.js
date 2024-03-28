import express from 'express';
import {secure} from './middlewares/token.js';
import {pool} from './db.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Express Generator');
});

// app.get('/verify/:token', secure, (req, res) => {
//     res.send('Hello World');
// });

// app.get('/unauthorised', (req, res) => {
//     res.send('You need a token');
// });

app.post('/users', async (req, res) => {
    const {first_name, last_name} = req.body;
    try {
        const {rows} = await pool.query(
            'INSERT INTO users (first_name, last_name) VALUES ($1, $2) RETURNING *',
            [first_name, last_name]
        );
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

app.post('/token/:userId', async (req, res) => {
    const {userId} = req.params;
    const {token} = req.body;
    try {
        const {rows: user} = await pool.query(
            'SELECT * FROM users WHERE id= $1',
            [userId]
        );
        if (!user.length > 0) {
            return res.send('user does not exist');
        }

        const {rows} = await pool.query(
            `WITH subquery AS (
            INSERT INTO token (token) VALUES ($1) RETURNING id
          )
          UPDATE users 
          SET token_id = subquery.id
          FROM subquery
          WHERE users.id = $2 RETURNING first_name, token_id`,
            [token, userId]
        );

        res.json(rows);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/verify/:token', async (req, res) => {
    const {token} = req.params;
    try {
        const {rows} = await pool.query(
            `SELECT * FROM users 
          INNER JOIN token on users.token_id = token.id
          WHERE token = $1`,
            [token]
        );

        if (!rows.length > 0) {
            return res.status(401).send('invalid token');
        }

        res.send('token valid');
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

export default app;
