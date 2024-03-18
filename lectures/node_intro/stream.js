const fs = require('fs');

let stream = fs.createReadStream('./lorem.html', 'utf-8');

let data;

stream.on('data', (chunk) => {
    console.log(`chunk: ${chunk.length}`);
    console.log(chunk);
    console.log('========');
    data += chunk;
});
