const {emitter} = require('./answer.js');

console.clear();
process.stdout.write('What is your question?\n');
process.stdin.on('data', (data) => {
    emitter.emit('question', data.toString().trim());
});
