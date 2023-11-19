//Challenge 1

// function getCelsius(tempFahrenheit) {
//   return (tempFahrenheit - 32) * (5 / 9);
// }

const getCelsius = (tempFahrenheit) => (tempFahrenheit - 32) * (5 / 9);

console.log(getCelsius(50));

console.log(`The Temperature is ${getCelsius(50)} \xB0C`);

//Challenge 2
//create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum andmaximum numbers in the array;
// console.log(minMax([1, 2, 4, 5, 6, 7])); //{min:1,max:7}

// const minMax = (arry) => {
//   const obje = {
//     min: Math.min(...arry),
//     max: Math.max(...arry),
//   };
//   return (obje);
// };

function minMax(arry) {
  const obje = {
    min: Math.min(...arry),
    max: Math.max(...arry),
  };
  return obje;
}

console.log(minMax([1, 2, 4, 5, 6, 7, 9, -1]));

//Challenge 3

//create an IIFE (immediately invoked function expression )
//that takes in the length and width of a rectangle
//output in a message as soon as the page loads

// (function (l, w) {
//   const areaOfRectangle = l * w;
//   console.log(
//     `The area of a rectange with a lenght of ${l} and a width of ${w} i ${areaOfRectangle}`
//   );
// })(2, 4);

//shorthand arrow function iife
((l, w) => {
  const areaOfRectangle = l * w;
  console.log(
    `The area of a rectange with a lenght of ${l} and a width of ${w} i ${areaOfRectangle}`
  );
})(20, 4);
