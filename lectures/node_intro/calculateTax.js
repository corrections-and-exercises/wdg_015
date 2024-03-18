// console.log(process.argv);

// function grabFlagValue(flag) {
//     let indexAfterFlag = process.argv.indexOf(flag) + 1;
//     return process.argv[indexAfterFlag];
// }

// const userName = grabFlagValue('--user');
// console.log(userName);

// const input = process.argv[2];
// const tax = input * 0.19;
// console.log(tax);

let count = 0;

console.clear();
process.stdout.write('Input number \n');
process.stdout.write('> ');

process.stdin.on('data', (data) => {
    const inputAsNumber = data * 1;

    const tax = inputAsNumber * 0.19;
    console.log('Tax ' + tax);
    setTimeout(() => {
        console.clear();
        process.stdout.write('Input number\n');
        process.stdout.write('> ');
    }, 2000);

    count += 1;
    if (count >= 3) {
        process.exit();
    }
});

process.on('exit', function () {
    process.stdout.write('\n');
    process.stdout.write(
        'Your free trial is over. Thanks for using our app!\n'
    );
});
