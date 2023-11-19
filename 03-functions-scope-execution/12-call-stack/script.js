/// put break point at line no. 15 and see call stack under debugger which method is being called and which method are removed form the stack
// we can see for line no. 34 it will follow LIFO

function first() {
  console.log('first .....');
}

function second() {
  console.log('second .....');
}

function third() {
  console.log('third .....');
}

first();
second();
third();

function first1() {
  console.log('first .....');
  second1();
}

function second1() {
  console.log('second .....');
  third1();
}

function third1() {
  console.log('third .....');
}

first1();
