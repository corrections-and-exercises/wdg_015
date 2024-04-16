import express from 'express';
// import session from 'express-session';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// const sess = {
//     secret: 'keyboard cat',
//     cookie: {},
// };

// app.use(session(sess));

// app.get('/', (req, res) => {
//     res.send('Express Generator');
// });

// app.get('/route1', (req, res) => {
//     req.session.myNewSession =
//         'You have visted the page /route1 during your navigation';
//     res.end();
// });

// app.get('/route2', (req, res) =>
//     res.send(req.session.myNewSession || 'not visted yet')
// );

const mySuperSecret = 'MySuperSecret';

const generateToken = (data, secret) => {
    return jwt.sign(data, secret, {expiresIn: 1800});
};

const verifyToken = (req, res, next) => {
    jwt.verify(req.body.token, mySuperSecret, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

app.get('/set-token', (req, res) => {
    res.send(generateToken({name: 'karl'}, mySuperSecret));
});

app.get('/verify-token', verifyToken, (req, res) => res.send(req.user));

export default app;
