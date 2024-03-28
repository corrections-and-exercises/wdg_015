import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

function secure(req, res, next) {
    const {token} = req.query;
    if (!token) {
        return res.sendStatus(403);
    }
    next();
}

app.use(secure);

app.get('/', (req, res) => {
    res.send('Express Generator');
});

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

export default app;
