let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];
//nesting
// fruits.push(berries);

// x = fruits[3][1];

 const allFruits = [fruits, berries];
 x = allFruits[1][0];


//Concat
x = fruits.concat(berries);

//Spread Operator (...)
x = [...fruits, berries];
x = [...fruits, ...berries];

const arr = [1, 2, 3, [4, 5], [6, 7], 8];
x = arr;

x = arr.flat();

//static Methods on Array object

x = Array.isArray('Hello');

x = Array.from('1235');

const a = 1;
const b = 2;
const c = 3;
const d = 5;

x = Array.of(a, b, c, d);

console.log(x);