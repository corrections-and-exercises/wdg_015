import { pool } from '../db.js';

createTables();

async function createTables() {
    const res = await pool.query(`
    CREATE TABLE users (
    id serial primary key,
    firstname text,
    lastname text,
    email text,
    password text);

    CREATE TABLE posts (
    id serial primary key,
    title text,
    content text,
    creationDate date not null default CURRENT_DATE,
    user_id integer,
    FOREIGN KEY (user_id) REFERENCES users(id)
    );
    `);

    console.log('tables created', res);
}
