const fs = require('fs');

async function fetchAndWrite() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    fs.writeFile('data.json', JSON.stringify(data), () => {
        console.log('file created');
    });
}

fetchAndWrite();
