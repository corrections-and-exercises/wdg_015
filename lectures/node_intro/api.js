const {createServer} = require('http');

const data = require('./data.json');

createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/json',
    });
    let url = req.url.substring(1);

    if (url && url > 0 && url < 100) {
        let response = data.filter((el) => el.id == url);
        res.end(JSON.stringify(response));
    } else {
        res.end(JSON.stringify(data));
    }
}).listen(8000);

console.log('Server is listening');
