console.log(addTwoNumbers(4, 5));
console.log(addTwoNumbers(10, 10));

function addTwoNumbers(a = 1, b = 1) {
  return a + b;
}

function logHello(name) {
  return 'Hello ' + name;
}

let num1 = 2;
let num2 = 2;

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(num1 == num2);
console.log(arr1 == arr2);

const person1 = {
  name: 'karl',
  location: {street: 'Lindenstrasse', city: 'Berlin'},
};

const person2 = {...person1};

person2.location.city = 'madrid';

console.log(person1);

function addStatus(person) {
  const copy = {...person};
  copy.status = true;
  return copy;
}

const myFunc = function () {
  return 'abc';
};
console.log(myFunc());

const myArrowFunc = (something, num) => something;

console.log(myArrowFunc('hello'));

function specialFunction(callback, name) {
  return callback(name);
}

console.log(specialFunction(logHello, 'karl'));

const factorial = function (number) {
  console.log(number);
  if (number <= 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

/*
factorial(5)
    5 * factorial(4)      // 120
      4* factorial(3)      //24
        3* factorial(2)    //6
          2* factorial(1)   //2
            1* factorial(0) //1 
              return 1



*/
console.log(factorial(5));
