// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

//INITIAL EXPRESSION - Initializes a variable/counter
//CONDITION EXPRESSION - Codition that the loop will continue to run as long as it is met or until the condition is true
//INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
//STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, user the {} syntax.

// for (let i = 5; i <= 11; i = i + 2) {
//   console.log('Number ' + i);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log('Number ' + i);
// }

// ..assignment to constant variable error
// for (const i = 5; i <= 11; i = i + 2) {
//   console.log('Number ' + i);
// }
//you can use var but best practice is useing let

// for (let i = 5; i <= 11; i = i + 2) {
//   if (i === 7) {
//     console.log('7 is my lucky number');
//   } else {
//     console.log('Number ' + i);
//   }
// }

//Nest Loops
// for (let i = 1; i <= 10; i++) {
//   console.log('Number ' + i);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i}*${j} = ${i * j}`);
//   }
// }

// Loop through an array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
  //   if (names[i] !== 'Sara') {
  //     console.log(names[i]);
  //   } else {
  //     console.log(`${names[i]} you are the best`);
  //   }

  names[i] === 'Sara'
    ? console.log(`${names[i]} you are the best`)
    : console.log(names[i]);
}
