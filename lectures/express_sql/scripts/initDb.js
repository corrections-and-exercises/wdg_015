import {pool} from '../db.js';

createUserTable();

async function createUserTable() {
    try {
        const res = await pool.query(`
        CREATE TABLE users (
            id serial primary key,
            firstname varchar(255),
            lastname varchar(255)
        );`);
        console.log('table created', res);
    } catch (error) {
        console.log(error);
    }
}
