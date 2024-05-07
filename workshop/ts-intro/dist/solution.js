"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let greeting = 'Hello';
// greeting = 5;
let userOne = 'Karl';
function extractLocation(person) {
    return person.location;
}
// extractLocation(userOne);
console.log(extractLocation({
    location: { city: 'berlin', street: 'lindenstrasse' },
}));
let person2 = { name: 'hannah', age: 30, isActive: true };
person2.location = 'berlin';
'karl'.toUpperCase();
function addNumbers(a, b) {
    return a + b;
}
let result = addNumbers(32, 45);
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
