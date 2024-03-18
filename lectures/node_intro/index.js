const os = require('os');
const fs = require('fs');
const path = require('path');
const {greet} = require('./greet.js');
// import {greet} from './greet.js';
console.log('hello world');

console.log(os.freemem());
console.log(os.homedir());

let files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', (err, files) => {
    if (err) {
        throw err;
    }
    console.log(files);
});

console.log('test');

console.log(__dirname);
console.log(__filename);
console.log(`The file name is ${path.basename(__filename)}`);

console.log(path.resolve('index.js'));

greet();
