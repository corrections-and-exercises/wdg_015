import {pool} from '../db.js';

export async function createPost(req, res) {
    const {title, content, user_id} = req.body;
    try {
        const {rows: post} = await pool.query(
            'INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *;',
            [title, content, user_id]
        );
        res.json(post);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getPosts(req, res) {
    try {
        const {rows: posts} = await pool.query('SELECT * FROM posts');
        res.json(posts);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getPostWithId(req, res) {
    const {id} = req.params;
    try {
        const {rows: post} = await pool.query(
            'SELECT * FROM posts WHERE id= $1',
            [id]
        );
        res.json(post[0]);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
