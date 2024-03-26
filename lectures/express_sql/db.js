// import pkg from 'pg';
// const {Pool} = pkg;

// console.log(process.env.POSTGRES_DATABASE);

// export const pool = new Pool({
//     user: process.env.POSTGRES_USER,
//     host: process.env.POSTGRES_HOST,
//     database: process.env.POSTGRES_DATABASE,
//     port: process.env.POSTGRES_PORT,
//     password: process.env.POSTGRES_PASSWORD,
// });

import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize(
    process.env.POSTGRES_DATABASE,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.POSTGRES_HOST,
        dialect: 'postgres',
        port: process.env.POSTGRES_PORT,
    }
);

// try {
//     await sequelize.authenticate();
//     console.log('connection has been succesfully');
// } catch (error) {
//     console.log('unable to connect');
// }
