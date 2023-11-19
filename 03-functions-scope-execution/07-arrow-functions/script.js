// function add(a, b) {
//     return a + b;
// }

// const add = function (a, b) {
//     return a + b;
// }

// Arrow Funciton syntax
const add = (a, b) => {
  return a + b;
};

//Implicit Return
const subtract = (a, b) => a - b;

//if singel param then dont use paranthisis if more than 1 than use paranthisis()
const double = (a) => a * 2;

//Returning an object
//this will return undfned as there is no return
// const createObj = () => {
//     name: 'Brad',
//   };

// this will return object as we use paranthisis =>({})
const createObj = () => ({
  name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5];

console.log(double(19));
console.log(subtract(29, 9));
console.log(add(1, 3));
console.log(createObj());

numbers.forEach(function (n) {
  console.log(n);
});

//shoter of above funciton -- Arrow funciton in a callback function
numbers.forEach((n) => console.log(n));
