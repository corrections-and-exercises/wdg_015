"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
'hello'.toupperCase();
let greeting = 'Hello';
let userOne = 'Karl';
console.log(greeting.concat('', ' Karl'));
greeting();
// /**
//  *
//  * @param {object} person
//  * @param {string} person.location
//  * @returns
//  */
function extractLocation(person) {
    return person.location;
}
extractLocation({ name: 'hannah', location: 'berlin' });
console.log(extractLocation(userOne));
let person2 = { name: 'jane' };
console.log(person2.location);
// 'karl'.toupperCase();
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(3, '4'));
