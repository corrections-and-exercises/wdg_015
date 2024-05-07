"use strict";
//type alias
Object.defineProperty(exports, "__esModule", { value: true });
// type User = {
//     name: string;
//     location: {
//         city: string;
//     };
// };
let users;
users = [{ name: 'karl' }, { name: 'hannah' }, { name: 'steve' }];
// users.push('jim');
users.push({ name: 'jim' });
let numbers;
// let numbers: User[];
numbers = [1, 2, 3, 4, 5];
let userTwo = {
    name: 'karl',
    age: 20,
    sayName() {
        console.log(this.name);
    },
    street: 'lindenstrasse',
    city: 'berlin',
};
// userTwo.sayName();
function letPersonSpeak(person) {
    person.sayName();
}
letPersonSpeak(userTwo);
// typeof
const pikachu = {
    name: 'pikachu',
    type: 'electric',
    status: 'active',
    health: 100,
};
// any
let userThree = 'steve';
userThree = { name: 'steve' };
userThree = 20;
// function
async function fetchData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
[1, 2, 3, 4].map((n) => n * 2);
function sayYourAge(person) {
    if (person.name !== undefined) {
        let newName = person.name.toUpperCase();
    }
    return person.age;
}
// union type
function generateId(name, age) {
    const firstPart = name
        .split('')
        .map((x) => x + x.charCodeAt(0) * 132)
        .join('');
    if (typeof age === 'string') {
        age = parseInt(age, 10);
    }
    const secondPart = (age * 12 * 2344 - 293 + 23).toString();
    return firstPart + secondPart;
}
const paragraph = document.getElementById('article_01');
paragraph.textContent = 'changed';
// paragraph.src = 'hello world';
const firstName = 'Karl';
const myState = 'fetching';
function extractLocation2(person) {
    return person.location;
}
extractLocation2({ location: 'berlin', name: 'karl', isMarried: true });
extractLocation2({
    location: 'berlin',
    name: 'hannahs',
    age: 20,
    isActive: true,
});
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement(['a', 'b', 'c']));
console.log(getFirstElement([1, 2, 3]));
function getValue(source, propertyName) {
    return source[propertyName];
}
getValue({ name: 'karl', age: 20 }, 'age');
getValue({ location: 'berlin', isMarried: true }, 'location');
