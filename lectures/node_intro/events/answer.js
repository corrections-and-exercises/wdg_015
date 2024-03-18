const {EventEmitter} = require('events');

let emitter = new EventEmitter();

emitter.on('question', (data) => {
    console.log("I don't know the answer!");
    console.log(`What does '${data}' even mean?`);
    process.exit();
});

module.exports = {emitter};
