// For Loop solution 1

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// while loop solution 2
let i = 0;

while (i <= 100) {
  switch (i <= 100) {
    case i % 3 === 0 && i % 5 === 0:
      console.log('FizzBuss');
      break;
    case i % 3 === 0:
      console.log('Fizz');
      break;
    case i % 5 === 0:
      console.log('Buzz');
      break;
    default:
      console.log(i);
  }
  i++;
}
