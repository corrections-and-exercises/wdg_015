import express from 'express';

const app = express();
import {pool} from './db.js';
// import {Post} from './models/sq_models.js';

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Express Generator');
});

app.post('/users', async (req, res) => {
    const {firstname, lastname} = req.body;
    try {
        const {rows} = await pool.query(
            'INSERT INTO users (firstname, lastname) VALUES ($1, $2) RETURNING * ;',
            [firstname, lastname]
        );
        res.json(rows);
        // res.json(rows);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/users', async (req, res) => {
    try {
        const {rows: users} = await pool.query('SELECT * FROM users;');
        res.json(users);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/users/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const {rows: user} = await pool.query(
            'SELECT * FROM users WHERE id=$1',
            [id]
        );
        res.json(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.put('/users/:id', async (req, res) => {
    const {id} = req.params;
    const {firstname} = req.body;
    try {
        const {rows: user} = await pool.query(
            'UPDATE users SET firstname=$1 WHERE id=$2 RETURNING *;',
            [firstname, id]
        );
        res.json(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete('/users/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const {rows: user} = await pool.query(
            'DELETE FROM users WHERE id=$1 RETURNING *;',
            [id]
        );
        res.json(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
});

// SEQUELIZE

// app.post('/posts', async (req, res) => {
//     const {title, content} = req.body;
//     try {
//         const data = await Post.create({title, content});
//         res.json(data);
//     } catch (error) {
//         console.log(error);
//         res.sendStatus(500);
//     }
// });

// app.get('/posts', async (req, res) => {
//     try {
//         const data = await Post.findAll();
//         res.json(data);
//     } catch (error) {
//         console.log(error);
//     }
// });

// app.get('/posts/:id', async (req, res) => {
//     try {
//         const data = await Post.findAll({
//             where: {
//                 id: req.params.id,
//             },
//         });
//         res.json(data);
//     } catch (error) {
//         console.log(error);
//     }
// });
export default app;
