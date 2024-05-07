//type alias

type User = {name: string};

// type User = {
//     name: string;
//     location: {
//         city: string;
//     };
// };

let users: Array<User>;

users = [{name: 'karl'}, {name: 'hannah'}, {name: 'steve'}];

// users.push('jim');
users.push({name: 'jim'});

let numbers: Array<number>;
// let numbers: User[];

numbers = [1, 2, 3, 4, 5];

// interface

interface ILocation {
    street: string;
    city: string;
}

interface IUser extends ILocation {
    name: string;
    age: number;
    sayName: () => void;
}

let userTwo: IUser = {
    name: 'karl',
    age: 20,
    sayName() {
        console.log(this.name);
    },
    street: 'lindenstrasse',
    city: 'berlin',
};

// userTwo.sayName();

function letPersonSpeak(person: IUser) {
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

type Pokemon = typeof pikachu;

// any
let userThree: any = 'steve';
userThree = {name: 'steve'};
userThree = 20;

// function

async function fetchData(url: string): Promise<Object> {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

[1, 2, 3, 4].map((n) => n * 2);

function sayYourAge(person: {name?: string; age: number}) {
    if (person.name !== undefined) {
        let newName = person.name.toUpperCase();
    }
    return person.age;
}

// union type

function generateId(name: string, age: number | string) {
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

const paragraph = document.getElementById('article_01') as HTMLParagraphElement;

paragraph.textContent = 'changed';
// paragraph.src = 'hello world';

const firstName = 'Karl';

type Status = 'loading' | 'done' | 'error';

const myState: Status = 'fetching';

// generics

type Location = {location: string};

function extractLocation2<Type extends Location>(person: Type) {
    return person.location;
}

extractLocation2({location: 'berlin', name: 'karl', isMarried: true});
extractLocation2({
    location: 'berlin',
    name: 'hannahs',
    age: 20,
    isActive: true,
});

function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

console.log(getFirstElement(['a', 'b', 'c']));
console.log(getFirstElement([1, 2, 3]));

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}

getValue({name: 'karl', age: 20}, 'age');
getValue({location: 'berlin', isMarried: true}, 'location');
