import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DATABASE,
    port: process.env.POSTGRES_PORT,
    password: process.env.POSTGRES_PASSWORD,
});
