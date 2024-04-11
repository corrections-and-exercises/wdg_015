import pgk from 'pg';
const {Pool} = pgk;

export const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
});
