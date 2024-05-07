let greeting = 'Hello';
// greeting = 5;

let userOne = 'Karl';

// greeting();

interface IPerson {
    name?: string;
    location: {
        city: string;
        street: string;
    };
}

function extractLocation(person: IPerson) {
    return person.location;
}

// extractLocation(userOne);

console.log(
    extractLocation({
        location: {city: 'berlin', street: 'lindenstrasse'},
    })
);

interface IPerson2 {
    name: string;
    age: number;
    isActive: boolean;
    location?: string;
}

let person2: IPerson2 = {name: 'hannah', age: 30, isActive: true};

person2.location = 'berlin';

'karl'.toUpperCase();

function addNumbers(a: number, b: number) {
    return a + b;
}

let result = addNumbers(32, 45);

class Animal {
    name;
    age;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
