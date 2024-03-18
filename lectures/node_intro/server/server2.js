const http = require('http');
const querystring = require('querystring');
const fs = require('fs');

const products = ['bicycle', 'flowers', 'fish', 'burgers'];

// const server = http.createServer(function (request, response) {
//     response.write('Produkte \n\n');
//     products.forEach((product) => response.write(`${product}\n`));

//     response.end();
// });

const server = http.createServer(function (request, response) {
    response.setHeader('Content-Type', 'text/html', 'charset=utf-8');

    if (request.url === '/order') {
        let formData = '';

        request.on('data', function (data) {
            formData += data;
        });

        request.on('end', function () {
            const order = querystring.decode(formData);
            console.log(order.order);
            response.write(`<p>Your order: ${order.order}</p>`);
            response.end();
        });
    } else if (request.url === '/') {
        response.write(`<h1>Products</h1> <br/>`);
        products.forEach((product) => response.write(`<p>${product}</p>`));

        response.write(`
    <form action="/order" method="post">
    <input type="text" placeholder="order" name="order"/>
    <button type="submit">Send</button>
    </form>`);
        response.end();
    } else if (request.url === '/impressum') {
        let file = fs.readFileSync('./impressum.html').toString();
        response.write(file);
        response.end();
    } else {
        response.statusCode = 404;
        response.write('Not found');
        response.end();
    }
});

server.listen(8000);
