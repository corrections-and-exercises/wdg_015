const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const axios = require('axios');
const fs = require('fs/promises');

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    // res.send('Hello World');
    console.log('hello from the terminal');
    res.sendFile(path.resolve('index.html'));
});

app.delete('/', (req, res) => {
    res.json({good: 'yep'});
});

app.set('view engine', 'ejs');

app.get('/test-ejs', (req, res) => {
    res.render('test-ejs.ejs', {myTitle: 'hello world'});
});

app.get('/test-ejs2', (req, res) => {
    const users = ['Bob', 'John', 'Jane'];
    res.render('test-ejs2.ejs', {users: users});
});

app.get('/uploadTweet', (req, res) => {
    res.sendFile(path.resolve('form.html'));
});

app.post('/showTweet', (req, res) => {
    const {userName, message} = req.body;
    res.json({userName, message});
});

app.get('/searchForm', (req, res) => {
    res.sendFile(path.resolve('search.html'));
});

app.get('/notGoogleSearch', (req, res) => {
    const {search, date} = req.query;
    res.json({search, date});
});

app.get('/number/:id', (req, res) => {
    res.send(`The number is ${req.params.id}`);
});

app.get('/postlist', async (req, res) => {
    const {data} = await axios.get(
        'http://jsonplaceholder.typicode.com/posts/1'
    );
    const file = await fs.writeFile('post.json', JSON.stringify(data));
    res.json({data});
});

const server = app.listen(port, () => console.log('Hello'));
