// const email = 'test@test.com';

// //email/ string if it has value than true
// if (email) {
//   console.log('You passed in an email');
// }

// console.log(Boolean(email));

//falsy values:
// false
// 0
// "" or ''(empty string)
// null
// undefined
// NaN

// const x = false;
// const x = '';
// const x = '';
// const x = null;
// const x = undefined;
// const x = NaN;

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0'(0 in a string)
// - ' '(space in a string)
// - 'false'(false in a string)
// - [](empty array)
// - {}(empty object)
// - function(){}(empty function)

// const x = '0';
// const x = ' ';
// const x = 'false';
// const x = [];
// const x = {};
const x = () => {};

if (x) {
  console.log('This is truthy');
} else {
  console.log('this is falsy');
}

console.log(Boolean(x));

// Truthy and Falsy Caveats

const childern = 0; // this will print that please enter number of children
//though it would have printed you have 0 children
//to achive the same chnage the if clause
// if (childern) {]
// if (childern !== undefined) { //OR
if (!isNaN(childern)) {
  console.log(`You have ${childern} childern`);
} else {
  console.log(`Please enter number of children`);
}

//Chicking for empty arrays
// const posts = ['post one', 'post two'];
const posts = [];
console.log(posts.length);

if (posts.length > 0) {
  console.log('list posts');
} else {
  console.log('No posts to list');
}

//Chicking for empty objects
const users = {
  //name: 'Brad',
};

console.log(users.length); //undefined
console.log(Object.keys(users).length);
if (Object.keys(users).length > 0) {
  console.log('List User');
} else {
  console.log('No Users');
}

//loosy Equality (==)
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);

console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
