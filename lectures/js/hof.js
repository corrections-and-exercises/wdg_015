function logHello() {
  console.log('hello world');
}

function anotherFunction() {
  logHello();
}

function specialFunction(cb) {
  cb();
}

specialFunction(logHello);

function calculate(a, b, fn) {
  const result = fn(a, b);
  return result;
}

function addNumbers(a, b) {
  return a + b;
}

calculate(3, 4, (a, b) => a - b);

function sayHello() {
  console.log('hello');
}

sayHello('Karl');

function makeIncrementer(increment) {
  return function (value) {
    return value + increment;
  };
}
//CLOSURE
const incrementByOne = makeIncrementer(1);
/* function (value)
      return value + 1
  */
incrementByOne(5);

function calculate2(operator) {
  switch (operator) {
    case 'add':
      return (a, b) => a + b;
    case 'multiply':
      return (a, b) => a * b;
  }
}

const add = calculate2('add');
console.log(add(2, 3));

const myNumbers = [1, 2, 3, 4, 5];

const newArr = myNumbers.map((x) => x * 2);
console.log(newArr);

console.log(myNumbers.filter((x) => x > 3));
console.log(myNumbers);

console.log(myNumbers.reduce((acc, currValue) => (acc += currValue), 100));
