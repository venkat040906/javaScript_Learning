// Challenge 1
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'Jane@gmail.com',
    phone: '222-222-222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'Bob@gmail.com',
    phone: '333-333-333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'Jose@gmail.com',
    phone: '555-555-555',
    age: 23,
  },
];

//take the people array and create an array called youngPeople
//that stores objects with only name and email properties of the people
//that are 25 and under.
//the name property should have their first and last name.

const youngPeople = people
  .filter((p) => p.age <= 25)
  .map((details) => {
    return {
      name: details.firstName + ' ' + details.lastName,
      Email: details.email,
    };
  });

console.log(youngPeople);

//Challenge 2
//filter out only positive and add them
const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
  .filter((num) => num >= 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(positiveSum);

// Challenge 3
//capatilize first letter
const words = ['coder', 'programmer', 'developer'];

// const capitalizedWords = words.map(
//   (word) => word[0].toUpperCase() + word.slice(1)
// );

const capitalizedWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1);
});

console.log(capitalizedWords);
