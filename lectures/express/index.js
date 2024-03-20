import express, {urlencoded} from 'express';
import path from 'path';

import data from './books.json' assert {type: 'json'};

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(urlencoded({extended: false}));

//INTRO

// app.route('/')
//     .get((req, res) => res.send('Get a resoruce'))
//     .post((req, res) => res.send('created a resource'));

app.get('/', (req, res) => {
    //logic
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    res.send('Created a resource');
});

app.put('/', (req, res) => {
    res.send('Updated a resource');
});

app.delete('/', (req, res) => {
    res.send('Deleted a resource');
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/data', (req, res) => {
    const user = {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.de',
    };
    res.json({user});
});

app.get('/html', (req, res) => {
    res.sendFile(path.resolve('index.html'));
});

app.get('/redirect', (req, res) => {
    res.redirect('/html');
});

app.get('/download', (req, res) => {
    res.download(path.resolve('index.html'));
});

app.get('/user/:id/', (req, res) => {
    // const id = req.params.id
    const {id} = req.params;
    const {sort, language} = req.query;
    res.json({id, sort, language});
});

app.set('view engine', 'pug');

app.get('/template', (req, res) => {
    res.render('template', {title: 'hello', message: 'world'});
});

// BOOKS API

app.get('/books', (req, res) => {
    let results = data.books;
    const {pages} = req.query;

    if (pages) {
        results = data.books.filter((book) => book.pages > pages);
    }
    res.json(results);
});

app.get('/books/:isbn', (req, res) => {
    const {isbn} = req.params;
    const book = data.books.filter((book) => book.isbn === isbn);
    res.json(book);
});

app.post('/books', (req, res) => {
    const newBook = req.body;
    console.log(newBook);
    data.books.push(newBook);
    res.status(201).send('Book created');
});

app.put('/books/:isbn', (req, res) => {
    const {isbn} = req.params;
    const index = data.books.findIndex((book) => book.isbn === isbn);
    data.books[index].title = req.body.title;
    res.json(data.books[index]);
});

app.delete('/books/:isbn', (req, res) => {
    const {isbn} = req.params;
    data.books = data.books.filter((book) => book.isbn !== isbn);
    res.json(data.books);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
