const {createServer} = require('http');

const port = 8000;

createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
    });
    res.end('Hello World');
}).listen(port);

// createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html',
//     });

//     res.end(`
//     <!DOCTYPE HTML>
//     <html>
//     <body>
//     <h1>Serving HTML Text </h1>
//     <p>${req.method} request made for ${req.url}</p>
//     </body
//     </html>

//     `);
// }).listen(3000);

console.log(`web server is listening on port ${port}`);
