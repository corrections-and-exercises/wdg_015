import path from 'path';
import express from 'express';
import { pool } from './db.js';
import { hashPassword, comparePassword } from './utils/auth.js';
import { generateToken } from './utils/auth.js';
import { verifyToken } from './middlewares/verifyToken.js';
// import session from 'express-session';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Exercise 1 & 2 - SESSIONS
// const sess = {
//     secret: process.env.SESSION_SECRET,
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
// };

// app.use(session(sess));

// app.get('/setname', (req, res) => {
//     req.session.user = 'Jane Doe';
//     res.end();
// });

// app.get('/getname', (req, res) => {
//     res.send(`<h1>${req.session.user || 'Guest'}`);
// });

// app.get('/login', (req, res) => {
//     res.sendFile(path.resolve('views', 'login.html'));
// });

// app.post('/connect', (req, res) => {
//     const {
//         body: { login, password },
//     } = req;
//     if (login === 'john' && password === 'doe') {
//         req.session.isConnected = true;
//         res.redirect('/admin');
//     } else {
//         res.redirect('/login');
//     }
// });

// app.get('/admin', (req, res) => {
//     if (req.session.isConnected) {
//         res.sendFile(path.resolve('views', 'admin.html'));
//     } else {
//         res.redirect('/login');
//     }
// });

// app.get('/logout', (req, res) => {
//     req.session.destroy();
//     res.send(`<h1>Your are logged out!`);
// });

// Exercise 3 - JWT

// app.get('/login', (req, res) => {
//     res.sendFile(path.resolve('views', 'login.html'));
//
// });

// app.post('/connect', (req, res) => {
//     const {
//         body: { login, password },
//     } = req;
//     if (login === 'john' && password === 'doe') {
//         const jwt = generateToken({ login }, process.env.JWT_SECRET);
//         res.set('token', jwt);
//         res.sendFile(path.resolve('views', 'token.html'));
//     } else {
//         res.redirect('/login');
//     }
// });

// app.get('/admin', verifyToken, (req, res) => {
//     if (req.user.admin) {
//         res.sendFile(path.resolve('views', 'admin.html'));
//     } else {
//         res.redirect('/login');
//     }
// });

// Exercise 4 & 5 - JWT

app.get('/', (req, res, next) => {
    res.send(
        `<h1>JWT Exercise</h1><a href="/register-page">Register</a><br><a href="/login-page">Login</a><br><a href="/surprise-page">Surprise</a>`
    );
});
app.get('/register-page', (req, res) => {
    res.sendFile(path.resolve('views', 'register.html'));
});

app.get('/login-page', (req, res) => {
    res.sendFile(path.resolve('views', 'login.html'));
});

app.post('/register', async (req, res) => {
    try {
        const {
            body: { login, password },
        } = req;
        const hashedPassword = await hashPassword(password);
        const { rows: user } = await pool.query(
            `INSERT INTO users (login, password) VALUES ($1, $2) RETURNING login;`,
            [login, hashedPassword]
        );
        console.log('user', user);
        const token = generateToken({ user: user[0] }, process.env.JWT_SECRET);
        res.set('token', token);
        res.send(
            `<h1>You are registered.</h1><p>Copy your token from the responses headers and click on surprise<p><a href="/surprise-page">Surprise</a>`
        );
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post('/connect', async (req, res, next) => {
    try {
        const {
            body: { login, password },
        } = req;
        const { rows: user } = await pool.query(
            `SELECT * FROM users WHERE login = $1`,
            [login]
        );
        const isValidPassword = await comparePassword(
            password,
            user[0].password
        );
        if (isValidPassword) {
            const token = generateToken(
                { user: user[0].login },
                process.env.JWT_SECRET
            );
            res.set('token', token);
            res.send(
                `<h1>You are logged in.</h1><p>Check the response headers</p><a href="/surprise-page">to your surprise</a>`
            );
        } else {
            res.redirect('/login-page');
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/surprise-page', (req, res, next) => {
    res.sendFile(path.resolve('views', 'surprise.html'));
});

app.get('/surprise', verifyToken, (req, res, next) => {
    res.send(
        '<h1>Surprise</h1><img src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="surprise" height=100/>'
    );
});

export default app;
