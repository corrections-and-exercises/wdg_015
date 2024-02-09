//Array Cardio Warm Up
console.log('WARM UP');

const people2 = [
  {name: 'Wes', year: 1988},
  {name: 'Kait', year: 1986},
  {name: 'Irv', year: 1970},
  {name: 'Lux', year: 2015},
];

const comments = [
  {text: 'Love this!', id: 523423},
  {text: 'Super good', id: 823423},
  {text: 'You are the best', id: 2039842},
  {text: 'Ramen is my fav food ever', id: 123523},
  {text: 'Nice Nice Nice!', id: 542328},
];

// const person = {name: 'karl', age: 20};
// // const {age} = person;
// const age = person.age;
// console.log('age', age);
// console.log('person', person);

// const myArray = ['karl', 'jasmin', 'eva'];
// const [person1, person2, person3] = myArray;
// const myFriend = myArray[2]
// console.log('person1', person1);
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
console.log(people2.some(({year}) => new Date().getFullYear() - year >= 19));

console.log('alternative', people2.some(checkYear));

function checkYear(person) {
  return new Date().getFullYear() - person.year >= 19;
}
// Array.prototype.every() // is everyone 19 or older?

console.log(
  'every',
  people2.every((one) => 2024 - one.year >= 19)
);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

console.log(
  'comment1',
  comments.find((comment) => comment.id === 823423)
);

// Array.prototype.findIndex()
// Find the comment with this ID
const findCommentTwo = comments.findIndex((comment) => comment.id === 823423);
console.log('findCommentTwo', findCommentTwo);
// delete the comment with the ID of 823423
// delete comments[findCommentTwo];
// const toBeDeleted = comments.findIndex((index) => index.id === 823423);
// const res = comments.slice(toBeDeleted, toBeDeleted + 1);
// console.log('res', res);

comments.splice(findCommentTwo, 1);
console.log('comments', comments);

// Get your shorts on - this is an array workout!
// ## Array Cardio

// Some initial data we can work with:
// Take some time to analyze the data structure
// Do each objects have the exact same data?

console.log('MAIN');
const inventors = [
  {
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955,
    categories: ['man', 'physicist'],
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727,
    categories: ['man', 'mathematician'],
  },
  {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934,
    categories: ['woman', 'physicist'],
  },
  {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
  {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
  {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979,
    categories: ['woman', 'physicist'],
  },
  {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
  {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968,
    categories: ['woman', 'physicist'],
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909,
    categories: ['woman', 'inventor'],
  },
];

// Array.prototype.filter()
// 1. Filter the list of inventors to retrieve only those born between 1500 and 1600
// Expected output: an array containing two inventors: Galileo Galilei and Johannes Kepler

const renaissanceInventors = inventors.filter(
  (e) => e.year >= 1500 && e.year <= 1600
);
console.log('renaissance', renaissanceInventors);

// Array.prototype.filter()
// 2. Filter the list of inventors to retrieve only the ones that have the "mathematician" category
// Expected output: an array containing only one inventor: Isaac Newton

const mathGeniuses = inventors.filter(
  (e) => 'categories' in e && e.categories.includes('mathematician')
);

console.log(
  'mathematician',
  inventors.filter(({categories}) =>
    categories ? categories.includes('mathematician') : null
  )
);

console.log('math', mathGeniuses);
// Array.prototype.filter()
// 3. Filter the list of inventors to retrieve only the ones with the category === 'physicist' AND 'man'
// Expected output: an array containing only one inventor: Albert Einstein

const malePhysicists = inventors.filter(({categories}) =>
  categories
    ? categories.includes('man') && categories.includes('physicist')
    : null
);

console.log('male', malePhysicists);

// Array.prototype.map()
// 4. Give us an array filled with the inventors first and last names
// Expected output:
// ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie", "Johannes Kepler", "Nicolaus Copernicus", "Max Planck", "Katherine Blodgett", "Ada Lovelace", "Sarah E. Goode", …]

const nameList = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(nameList);

// Array.prototype.map()
// 5. Give us an array filled only with the inventors emails
// the emails should be lowercase firstName + date of birth @ inventor.com
// Expected output:
// eg: ["albert1879@inventor.com", "isaac1643@inventor.com", "galileo1564@inventor.com", "marie1867@inventor.com", "johannes1571@inventor.com", "nicolaus1473@inventor.com", "max1858@inventor.com", "katherine1898@inventor.com", "ada1815@inventor.com", "sarah e.1855@inventor.com", …]

const emails = inventors.map(
  (inventor) => `${inventor.first.toLowerCase()}${inventor.year}@inventor.com`
);

const mails2 = inventors.map(
  ({first, year}) => `${first.toLowerCase()}${year}@inventor.com`
);
console.log('emails', emails);

// Array.prototype.sort()
// 6. Sort the inventors by birthdate, youngest to oldest (eg: the one whose birth year is closer to us on top)
// Expected output: an array of inventors going from "Katherine Blodgett" -> to "Nicolaus Copernicus"

const birthDate = inventors.sort((p1, p2) =>
  p1.year < p2.year ? 1 : p1.year > p2.year ? -1 : 0
);

console.log(
  'alternativeDates',
  inventors.sort((a, b) => b.year - a.year)
);
console.log(birthDate);

function compare(a, b) {
  return b.year - a.year;
}

// Array.prototype.reduce()
// 7. How many years did all the inventors live all together?
// let ageAllTogetherComplicated = inventors.reduce(function (
//   allYears = {accLifespan: 0},
//   curr
// ) {
//   const currLifespan = curr.passed - curr.year;
//   // log(currLifespan);
//   // log (allYears.accLifespan)

//   if ('accLifespan' in allYears) {
//     allYears.accLifespan += currLifespan;
//   } else {
//     allYears['accLifespan'] = 0;
//   }

//   return allYears;
// },
// {}).accLifespan;

// let ageAllTogether = inventors.reduce(function (allYears, curr) {
//   const currLifespan = curr.passed - curr.year;
//   allYears += currLifespan;
//   return allYears;
// }, 0);

// console.log('complicated', ageAllTogetherComplicated);
// console.log('all', ageAllTogether);

const yearsLived = inventors.reduce(
  (acc, currVal) => currVal.passed - currVal.year + acc,
  0
);

console.log(yearsLived);

// Array.prototype.sort()
// 8. Sort the inventors by years lived

const sortedByLifeTime = inventors.sort(
  (a, b) => a.passed - a.year - (b.passed - b.year)
);

console.log('sorted', sortedByLifeTime);

// Array.prototype.filter()
// 9. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevardsInParis = [
  'Boulevard Auguste-Blanqui',
  'Boulevard Barbès',
  'Boulevard Beaumarchais',
  "Boulevard de l'Amiral-Bruix",
  'Boulevard Mortier',
  'Boulevard Poniatowski',
  'Boulevard Soult',
  'Boulevard des Capucines',
  'Boulevard de la Chapelle',
  'Boulevard de Clichy',
  'Boulevard du Crime',
  "Boulevard du Général-d'Armée-Jean-Simon",
  'Boulevard Haussmann',
  "Boulevard de l'Hôpital",
  'Boulevard des Italiens',
  'Boulevard Lefebvre',
  'Boulevard de la Madeleine',
  'Boulevard de Magenta',
  'Boulevard Malesherbes',
  'Boulevard Marguerite-de-Rochechouart',
  'Boulevard Montmartre',
  'Boulevard du Montparnasse',
  'Boulevard Raspail',
  'Boulevard Richard-Lenoir',
  'Boulevard Saint-Germain',
  'Boulevard Saint-Michel',
  'Boulevard de Sébastopol',
  'Boulevard de Strasbourg',
  'Boulevard du Temple',
  'Boulevard Voltaire',
  'Boulevard de la Zone',
];

const streetsWithDe = boulevardsInParis.filter((string) => string.match('de'));
console.log('street', streetsWithDe);

const re = /\s+de\s+/;
const filteredBoulevards = boulevardsInParis.filter((boulevard) =>
  boulevard.match(re)
);

console.log(filteredBoulevards);

// Array.prototype.sort()
// 10. Sort the people alphabetically by last name

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

console.log('sortedNames', people.sort());

// Array.prototype.reduce()
// 11. Sum up the instances of each of these vehicles
// (eg: how many times each vehicle appears in the array)

const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
  'skateboard',
];

const results = data.reduce((all, item) => {
  const currResult = all[item] ?? 0;
  all[item] = currResult + 1;
  return all;
}, {});

console.log(results);

const person = {name: 'karl'};

person['name'] = 'harald';

// Array.prototype.some()
// 12. Is at least one person 18 years old?

const family = [
  {name: 'Lily', year: 2009},
  {name: 'Leah', year: 2011},
  {name: 'Liv', year: 2000},
  {name: 'Lydia', year: 2015},
];

const isOver18 = family.some(({year}) => new Date().getFullYear() - year >= 18);
console.log('age', isOver18);

// Array.prototype.every
// 13. Do all names of the family members start with the letter L?

const startsWithL = family.every(({name}) => name.charAt(0) === 'L');
console.log('family', startsWithL);
